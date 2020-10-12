import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import HeaderTab from '../components/header';
export default function OrderScreen() {

   return(
    <Container>
    <HeaderTab/>
    <Text style={styles.myState}>Hello world this is order screen</Text>
    </Container>
   )
   
}
styles = StyleSheet.create({
    myState: {

        textAlign: 'center',
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 20
     }
})