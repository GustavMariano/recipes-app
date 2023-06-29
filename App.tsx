import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import Navigator from './src/routes/StackNavigator';
import { RecipeProvider} from './src/contexts/FavoriteRecipesContext';

export default function App() {
  return (
    <NavigationContainer>
      <RecipeProvider>
        <Navigator/>
      </RecipeProvider>
    </NavigationContainer>
  );
}

