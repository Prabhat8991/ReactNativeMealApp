import { View, Text, Image, StyleSheet, Button } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import { useLayoutEffect } from 'react'
import IconButton from '../components/IconButton'
import { useSelector, useDispatch } from 'react-redux'
import { addFavourite, removeFavourite } from '../store/redux/favourites'
// import { FavouriteContext } from '../store/context/favourite-context'

function MealDetailScreen({ route, navigation }) {

    // const favoriteMealContext = useContext(FavouriteContext)

    const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids)
    const dispatch = useDispatch()


    const id = route.params.id
    const selectedMeal = MEALS.find((meal) => meal.id === id)


    // const isMealFavorite = favoriteMealContext.ids.includes(id)

    const isMealFavorite = favouriteMealIds.includes(id)


    function headerButtonPressHandler() {
        if (isMealFavorite) {
            // favoriteMealContext.removeFavourite(id)
            dispatch(removeFavourite({ id: id }))
        } else {
            dispatch(addFavourite({ id: id }))
            // favoriteMealContext.addFavourite(id)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={isMealFavorite ? 'star' : 'star-outline'} color="white" onPress={headerButtonPressHandler} />
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