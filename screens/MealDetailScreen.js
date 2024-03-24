import { View, Text, Image, StyleSheet, Button } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import { useLayoutEffect } from 'react'
import IconButton from '../components/IconButton'

function MealDetailScreen({ route, navigation }) {
    const id = route.params.id
    const selectedMeal = MEALS.find((meal) => meal.id === id)

    function headerButtonPressHandler() {

    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" color="white" onPress={headerButtonPressHandler} />
            }
        })
    }, [navigation, headerButtonPressHandler])

    return <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} textStyle={styles.detailText} />
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
        </View>
        {selectedMeal.ingredients.map((ingredient) => <Text key={ingredient}>{ingredient}</Text>)}
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
        </View>
        {selectedMeal.steps.map((step) => <Text key={step}>{step}</Text>)}
    </View>
}

export default MealDetailScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    detailText: {
        color: 'white'
    },
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        margin: 4,
        padding: 4,
        borderBottomColor: 'white',
        borderBottomWidth: 2
    }
})