
import { View, FlatList, StyleSheet } from 'react-native'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import { useLayoutEffect } from 'react'
import MealsList from '../components/MealList'

function MealsOverViewScreen({ route, navigation }) {

    function renderMealItem(itemData) {
        const item = itemData.item

        const mealItemProp = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            complexity: item.complexity,
            duration: item.duration,
            affordability: item.affordability
        }

        return <MealItem {...mealItemProp} />
    }

    const catId = route.params.categoryId;

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title
        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])

    const displayedMeals = MEALS.filter((mealItem) => { return mealItem.categoryIds.indexOf(catId) >= 0 })
    return <MealsList items={displayedMeals} />
}

export default MealsOverViewScreen