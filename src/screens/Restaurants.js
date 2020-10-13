import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title , Subtitle} from 'native-base';
import  { Component } from 'react';
import Posts from '../components/restauarntCards';


export default function Restaurants({navigation}) {

   return(
      <Container>
      <Header>
      <Left>
            <Button transparent onPress={()=> navigation.navigate("Home")}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
        <Body>
          <Title>Restaurants</Title>
          <Subtitle>Please Select </Subtitle>
        </Body>
        <Right />
      </Header>

      <Posts style={styles.myState}/>
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



