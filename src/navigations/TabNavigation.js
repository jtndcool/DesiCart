import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import Cart from '../screens/Cart';
import ProfileScreen from '../screens/ProfileScreen';
import  HomeStackNavigator  from './StackNavigation';


const Tab = createBottomTabNavigator();

export function MyTabs() {
    return (
      <Tab.Navigator 
      style={styles.tab}
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
  
      }}
      >
     <Tab.Screen 
     name="Home"
      component={HomeStackNavigator}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={'black'} size={20} />
        ),
      }} />
     <Tab.Screen 
     name="Order"
     
      component={OrderScreen}
      options={{
       
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="format-list-bulleted" color={'black'} size={20} />
        ),
      }} />
     <Tab.Screen name="Cart" component={Cart} 
      options={{
        tabBarLabel: 'Cart',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cart-outline" color={'black'} size={20} />
        ),
      }}/>
     <Tab.Screen
      name="Profile" 
      size={30}
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={'black'} size={20} />
        ),
      }} />
     </Tab.Navigator>
    )
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