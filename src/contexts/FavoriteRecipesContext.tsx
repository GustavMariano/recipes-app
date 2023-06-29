import React, { createContext, useState } from 'react';

interface RecipeContextType {
  favoriteRecipes: any[];
  addFavoriteRecipe: (recipe: any) => void;
  removeFavoriteRecipe: (recipe: any) => void;
  setFavoriteRecipes: React.Dispatch<React.SetStateAction<any[]>>;
}

export const RecipeContext = createContext<RecipeContextType>({
  favoriteRecipes: [],
  addFavoriteRecipe: () => {},
  removeFavoriteRecipe: () => {},
  setFavoriteRecipes: () => {},
});

export const RecipeProvider = ({ children }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const addFavoriteRecipe = (recipe) => {
    setFavoriteRecipes([...favoriteRecipes, recipe]);
  };

  const removeFavoriteRecipe = (recipe) => {
    const updatedRecipes = favoriteRecipes.filter(
      (favoriteRecipe) => favoriteRecipe.idMeal !== recipe.idMeal
    );
    setFavoriteRecipes(updatedRecipes);
  };

  return (
    <RecipeContext.Provider
      value={{ favoriteRecipes, addFavoriteRecipe, removeFavoriteRecipe, setFavoriteRecipes }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
