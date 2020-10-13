import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Restaurants from "../screens/Restaurants";

import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();


const MyStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen 
      name="Home"  
      component={HomeScreen} 
      />



      <Stack.Screen
       name="Restaurants" 
       component={Restaurants}
      />
    </Stack.Navigator>
  );
}
export default function HomeStackNavigator() {
  return (
   
      <MyStack />
    );
}
