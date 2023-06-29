import React, { useContext } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { RecipeContext } from '../../contexts/FavoriteRecipesContext';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import { Ionicons } from '@expo/vector-icons';

export default function Perfil({ navigation }) {
  const { favoriteRecipes, setFavoriteRecipes } = useContext(RecipeContext);

  const handleRecipePress = (recipe) => {
    navigation.navigate('Receita', { recipe });
  };

  const handleLogout = async () => {
    await AsyncStorage.multiRemove(['userId', 'userName']);
    setFavoriteRecipes([]);
    navigation.navigate('Welcome');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Header/>

        <TouchableOpacity onPress={handleLogout} style={styles.logout}>
            <Ionicons name="log-out" size={24} color="black" style={styles.logoutIcon} />
            <Text style={styles.textLogout}>Sair</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Suas receitas favoritas</Text>

        {favoriteRecipes.map((recipe) => (
            <TouchableOpacity key={recipe.idMeal} style={styles.gridContainer} onPress={() => handleRecipePress(recipe)}>
              <View style={styles.recipeContainer}>
                <Image source={{ uri: recipe.strMealThumb }} style={styles.recipeImage} />
                <Text style={styles.recipeName}>{recipe.strMeal}</Text>
              </View>
            </TouchableOpacity>
        ))}
    </ScrollView>
  );
}
