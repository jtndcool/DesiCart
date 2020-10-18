import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Content>
        <Card style={styles.cardStyle}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://banner2.cleanpng.com/20180413/oyq/kisspng-restaurant-logo-lunch-5ad1606381cc10.5146934915236711395317.jpg'}} />
                <Body>
                  <Text>Zimidar Dhaba</Text>
                  <Text note>Pure Veg</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201509/dhaba-story_647_090415065808.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                <MaterialCommunityIcons style={styles.iconStyle} name="crosshairs-gps" color={'black'} size={20} />
                
                  <Text style={{color:'black'}}>Near Bus Stand Puranpur</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                <MaterialCommunityIcons  style={styles.iconStyle}  name="cash" color={'black'} size={20} />
                  <Text style={{color:'black'}}>150 for 2</Text>
                </Button>
              </Body>
              <Right>
                <Text  style={{color:'black'}}>127 orders since lockdown</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
  
styles=StyleSheet.create({
  cards:{
  
    borderRadius:10,
    margin:5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
     flex : 1
  }
})