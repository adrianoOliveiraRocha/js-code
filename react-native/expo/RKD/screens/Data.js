import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllClients from '../components/AllClients';
import ClientDetails from '../components/ClientDetails';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Main"
        component={AllClients}
        options={{
          title: "All Clients",
          headerTintColor: "white",
          headerStyle: {backgroundColor: "#4589df"}
        }}
      />

      <Stack.Screen 
        name="Details"
        component={ClientDetails}
        options={{
          title: "Details",
          headerTintColor: "white",
          headerStyle: {backgroundColor: "#4589df"}
        }}
      />
    </Stack.Navigator>
  );
}



function Data() {
  return(
    <MyStack />
  );
}

export default Data;
