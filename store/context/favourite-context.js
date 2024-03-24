import { createContext, useState } from "react";

export const FavouriteContext = createContext({
    ids: [],
    addFavourite: (id) => { },
    removeFavourite: (id) => { }
})

function FavouriteContextProvider({ children }) {
    const [favouriteMealIds, setFavouriteMealId] = useState([]);

    function addFavourite(id) {
        setFavouriteMealId((currentFavIds) => [...currentFavIds, id])
    }

    function removeFavourite(id) {
        setFavouriteMealId((currentFavIds) => currentFavIds.filter((mealId) => mealId != id))
    }

    const value = {
        ids: favouriteMealIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    }

    return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>
}


export default FavouriteContextProvider
