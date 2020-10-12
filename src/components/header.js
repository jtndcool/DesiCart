import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StyleSheet } from 'react-native';
export default class HeaderTab extends Component {
  render() {
    return (

        <Header>

          <Body>
            <Title>DesiCart</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='cart' />
            </Button>
          </Right>
        </Header>
  
    );
  }
}

styles = StyleSheet.create({
    title:{
    
    }
})