import { createSlice } from '@reduxjs/toolkit'

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        ids: []
    },
    // reducers are functions to change state
    // In redux toolkit its ok to mutate state unlike normal redux
    reducers: {
        addFavourite: (state, action) => {
            state.ids.push(action.payload.id)
        },
        removeFavourite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        }
    }
})

export const addFavourite = favouritesSlice.actions.addFavourite
export const removeFavourite = favouritesSlice.actions.removeFavourite
export default favouritesSlice.reducer