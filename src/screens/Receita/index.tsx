import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RecipeContext } from '../../contexts/FavoriteRecipesContext';
import { styles } from './styles';

export default function Receita({ route }) {
  const { recipe } = route.params;
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');

  const { favoriteRecipes, addFavoriteRecipe, removeFavoriteRecipe } = useContext(
    RecipeContext
  );

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`)
      .then(response => {
        const data = response.data;
        if (data.meals && data.meals.length > 0) {
          const meal = data.meals[0];
          const mealIngredients = [];
          for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`] && meal[`strIngredient${i}`].trim() !== '') {
              const ingredient = {
                name: meal[`strIngredient${i}`],
                quantity: meal[`strMeasure${i}`]
              };
              mealIngredients.push(ingredient);
            } else {
              break;
            }
          }
          setIngredients(mealIngredients);
          setInstructions(meal.strInstructions);
          setCategory(meal.strCategory);
        }
      })
      .catch(error => {
        console.error('Error fetching recipe details:', error);
      });
  }, []);

  const isRecipeFavorite = favoriteRecipes.some(favorite => favorite.idMeal === recipe.idMeal);

  const handleToggleFavorite = () => {
    if (isRecipeFavorite) {
      removeFavoriteRecipe(recipe);
    } else {
      addFavoriteRecipe(recipe);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={{ uri: recipe.strMealThumb }} style={styles.backgroundImage} />

        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.recipeTitle}>{recipe.strMeal}</Text>
            <TouchableOpacity onPress={handleToggleFavorite} style={styles.favoriteButton}>
              <Icon
                name={isRecipeFavorite ? 'heart' : 'heart-o'}
                size={24}
                color={isRecipeFavorite ? 'red' : 'black'}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.subheading}>Ingredients:</Text>
          {ingredients.map((ingredient, index) => (
            <View key={index} style={styles.ingredientContainer}>
              <Image
                source={{ uri: `https://www.themealdb.com/images/ingredients/${ingredient.name}.png` }}
                style={styles.ingredientImage}
              />
              <Text style={styles.ingredientText}>
                {ingredient.name}    |    {ingredient.quantity}
              </Text>
            </View>
          ))}

          <Text style={styles.subheading}>Instructions:</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
