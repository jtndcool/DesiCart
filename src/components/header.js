import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StyleSheet, ImageBackground } from 'react-native';

export default class HeaderTab extends Component {
    
  render() {
    return (

   
          <Header style={styles.headerStyle} androidStatusBarColor="black" >

<Body>
  <Title style={{ color:'black'}}>DesiCart</Title>
</Body>
<Right>
  <Button transparent>
    <Icon style={{ color:'black'}} name='cart' />
  </Button>
</Right>
</Header>
      
      
  
    );
  }
}

styles = StyleSheet.create({
    headerStyle:{
        
            backgroundColor: '#f8f8ff',

          
    }
})