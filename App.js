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
const Tab = createBottomTabNavigator();

export default function App() {
  return (

  
  <NavigationContainer styles={styles.container}>
    <MyTabs />
  </NavigationContainer>
    
  


// <View style={styles.container}>
// <Text>Open uhvp App.js to start working on your app!</Text>
// <HomeScreen/>
// <StatusBar style="auto" />

// <Tab.Navigator>
// <Tab.Screen name="Home" component={HomeScreen} />
// <Tab.Screen name="Profile" component={ProfileScreen} />
// </Tab.Navigator>
// </View>
 
 );
}

function MyTabs() {
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
    component={HomeScreen}
    options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={'black'} size={20} />
      ),
    }} />
   <Tab.Screen 
   name="Ordero"
   
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
