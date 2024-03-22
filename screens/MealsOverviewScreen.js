
import { View, FlatList, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

function MealsOverViewScreen({ route }) {

    function renderMealItem(itemData) {
        return <MealItem title={itemData.item.title} />
    }

    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => { return mealItem.categoryIds.indexOf(catId) >= 0 })
    return <View style={styles.container}>
        <FlatList renderItem={renderMealItem} data={displayedMeals} keyExtractor={(meal) => meal.id} />
    </View>
}

export default MealsOverViewScreen

const styles = StyleSheet.create({
    container: {

    }
})