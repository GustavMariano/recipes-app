import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Pesquisa from '../screens/Pesquisa';
import Perfil from '../screens/Perfil';
import Icon from 'react-native-vector-icons/Ionicons'



const tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'black',
                tabBarStyle: {
                    position: 'relative',
                    borderTopWidth: 0,
                    backgroundColor: '#ffbf5b',
                    paddingBottom: 2,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    
                    
                },  
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
                    } else if (route.name === "Pesquisa") {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === "Perfil") {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Icon name={iconName} size={22} color={color} />;
                },
            })}>
            <tab.Screen name='Home' component={Home} />
            <tab.Screen name='Pesquisa' component={Pesquisa} />
            <tab.Screen name='Perfil' component={Perfil} />
        </tab.Navigator>
    );
}

export default BottomTabNavigator;
