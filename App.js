import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Cart from './src/screens/Cart';
import OrderScreen from './src/screens/OrderScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './src/screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackNavigator } from "./src/navigations/StackNavigation";
import { MyTabs } from './src/navigations/TabNavigation';


export default function App() {
  return (

  
  <NavigationContainer  styles={styles.container}>
     <MyTabs />
  </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:40
  },
  tab:{
    fontSize:30
  }
});
