import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Formulary from './screens/Formulary';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#F8F8F8',
          tabBarStyle: {
            backgroundColor: '#431',
            margin: 1,
            borderTopWidth: 25,
            borderTopColor: '#fff'
          },
          tabBarLabelStyle: {
            textAlign: 'center',
            fontSize: 12
          },
          tabBarIndicatorStyle: {
            borderBottomColor: '#87B56A',
            borderBottomWidth: 2,
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarLabel: "Home"
          }}
          />
        <Tab.Screen 
          name="Form" 
          component={Formulary}
          options={{
            tabBarLabel: "Form"
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>    
  );
}
