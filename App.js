import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/Home';
import Discover from './src/Discover';
import Watchlist from './src/Watchlist';  
import DiscoverButton from './src/components/DiscoverButton'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: FontAwesome5,
    name: 'home'
  },
  Watchlist: {
    lib: FontAwesome,
    name: 'th-list'
  },

}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({size, color, focused}) => {
            if(route.name === 'Discover'){
              return  <DiscoverButton
              onPress={()=>{navigation.navigate('Discover')}} 
              focused={focused}/>
            }

            const { lib: Icon, name } = icons[route.name];
            return <Icon name={name} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#131418',
            borderTopColor: 'rgba(255, 255, 255, 0.2)',
          },
          activeTintColor: '#fff',
          inactiveTintColor: '#92929c',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Discover" options={{title: ''}} component={Discover} />
        <Tab.Screen name="Watchlist" component={Watchlist} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
