import { Text } from 'react-native'
import MealsList from '../components/MealList'
import { useContext } from 'react'
// import { FavouriteContext } from '../store/context/favourite-context'
import { MEALS } from '../data/dummy-data'
import { useSelector } from 'react-redux'

function FavouritesScreen() {
    // const favouriteContext = useContext(FavouriteContext)
    const favouriteMealIds = useSelector(state => state.favouriteMeals.ids)

    const favMeals = MEALS.filter(meal => favouriteMealIds.includes(meal.id))
    return <MealsList items={favMeals} />
}

export default FavouritesScreen