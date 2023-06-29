import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';

import { styles } from './styles';
import Header from '../../components/Header';

export default function ReceitasCategoria({ route, navigation }) {
  const { category } = route.params;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`)
      .then(response => {
        const data = response.data;
        if (data.meals) {
          setRecipes(data.meals);
        }
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  const handleRecipePress = recipe => {
    navigation.navigate('Receita', { recipe });
  };

  const renderRecipeItem = recipe => {
    return (
      <TouchableOpacity
        key={recipe.idMeal}
        onPress={() => handleRecipePress(recipe)}
        style={styles.recipeItem}
      >
        <Image
          source={{ uri: recipe.strMealThumb }}
          style={styles.recipeImage}
        />
        <Text style={styles.recipeName}>{recipe.strMeal}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
      <Header />
        <Text style={styles.categoryTitle}>{category.strCategory}</Text>
        <View style={styles.gridContainer}>
          {recipes.map(recipe => renderRecipeItem(recipe))}
        </View>
      </View>
    </ScrollView>
  );
}
