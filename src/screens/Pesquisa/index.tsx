import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';
import Header from '../../components/Header';

const Pesquisa = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      setRecipes(response.data.meals || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRecipePress = (recipe) => {
    navigation.navigate('Receita', { recipe });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header/>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Encontre sua receita</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="digite o nome da receita"
            value={query}
            onChangeText={setQuery}
          />
          <TouchableOpacity style={styles.button} onPress={searchRecipes}>
              <Text style={styles.buttonText}>Pesquisar</Text>
          </TouchableOpacity>

        </View>
      </View>

        <View style={styles.recipesContainer}>
          {recipes.map((recipe) => (
            <TouchableOpacity
              key={recipe.idMeal}
              onPress={() => handleRecipePress(recipe)}
              style={styles.recipeItem}
            >
              <Image source={{ uri: recipe.strMealThumb }} style={styles.recipeImage} />
              <Text style={styles.recipeTitle}>{recipe.strMeal}</Text>
            </TouchableOpacity>
          ))}
        </View>

    </ScrollView>
  );
};

export default Pesquisa;
