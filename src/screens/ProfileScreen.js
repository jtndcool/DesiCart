import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import HeaderTab from '../components/header';
export default function ProfileScreen() {
    return(
        <Container>
        <HeaderTab/>
        <Text style={styles.myState}>Hello world this is profile screen</Text>
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