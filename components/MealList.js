import { FlatList, View, StyleSheet } from "react-native"

import MealItem from "./MealItem"


function MealsList({ items }) {

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

    return <View style={styles.container}>
        <FlatList renderItem={renderMealItem} data={items} keyExtractor={(meal) => meal.id} />
    </View>
}

export default MealsList


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})