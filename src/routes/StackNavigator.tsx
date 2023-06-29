import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import BottomTabNavigator from './BottomTabNavigator';
import ReceitasCategoria from '../screens/ReceitasCategoria';
import Receita from '../screens/Receita';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />  
      <Stack.Screen name="Login" component={Login} />  
      <Stack.Screen name="Cadastro" component={Cadastro}/>   
      <Stack.Screen name='Home' component={BottomTabNavigator}/>
      <Stack.Screen name="ReceitasCategoria" component={ReceitasCategoria}/>
      <Stack.Screen name="Receita" component={Receita}/>  
    </Stack.Navigator>

    
  );
}

export default Navigator;