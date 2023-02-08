import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import CreatePost from './components/CreatePost';
import DetailsScreen from './components/DetailsScreen';
import LogoTitle from './components/LogoTitle';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: "#5566aa"
          },

          headerTintColor: "#fff",
          headerTitle: {
            fontWeight: "bold"
          }
        }} >          

        <Stack.Screen 
          name='Home' 
          component={HomeScreen}
          initialParams={{name: "Adriano Oliveira"}}
          options={{ 
            headerTitle: (props => <LogoTitle {...props} />)
          }} />
        <Stack.Screen 
          name='Details' 
          component={DetailsScreen} 
          options={{ title: "Details" }} />

        <Stack.Screen 
          name='CreatePost' 
          component={CreatePost} 
          options={{ title: "Create Post" }} />

      </Stack.Navigator>
    </NavigationContainer>    
  );
}
