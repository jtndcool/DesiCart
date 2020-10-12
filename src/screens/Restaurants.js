import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default function Restaurants() {

   return(
    <Container>
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