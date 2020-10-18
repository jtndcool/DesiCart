import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HeaderTab from '../components/header';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Content, Card, CardItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Dimensions, Image, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


export default class HomeScreen extends React.Component {

  


  state={
    restauarntList:[]
  }

  fetchRestauarnts() {

      this.props.navigation.navigate("Restaurants");
  }
  

  render() {
    return(
      <Container>
      <HeaderTab/>
  
      <Card transparent>
              <CardItem>
                <Body>
  
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <MaterialCommunityIcons name="hand-pointing-left" color={'black'} size={25} />
                <Text style={{fontSize:20, marginLeft:5}}>Swipe left to see Categories</Text>
              </View>
               
                </Body>
              </CardItem>
            </Card>
    
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
   <Grid style={{marginBottom:40}}>
         
         <Col style={styles.gridStyle} onPress={this.fetchRestauarnts.bind(this)}>
         <Image style={styles.image} source = {require('../../assets/restaurant.png')} />
         <Text >Restaurants</Text>
         </Col>
  
         <Col style={styles.gridStyle}>
         <Image style={styles.image} source = {require('../../assets/grocery.png')} />
         <Text >Grocery</Text>
         </Col>
  
         <Col style={styles.gridStyle}>
         <Image style={styles.image} source = {require('../../assets/milk.png')} />
         <Text>Milk Service</Text>
         </Col>
  
         <Col style={styles.gridStyle}>
         <Image style={styles.image} source = {require('../../assets/vege.png')} />
         <Text >Vegies</Text>
         </Col>
  
     
       </Grid>
    </ScrollView>
  
  <ScrollView>
  
  <Grid>
       <Row >
         <Image source = {{uri:'https://static.toiimg.com/photo/57888302.cms'}} style={{width: 400, height: 200}}/>
         </Row>
         <Row >
         <Image source = {{uri:'https://static.toiimg.com/photo/imgsize-86204,msid-67785906/67785906.jpg'}} style={{width: 400, height: 200}}/>
         </Row>
         <Row>
         <Image source = {{uri:'https://d168jcr2cillca.cloudfront.net/uploadimages/sales_offer_mainpic_20100909174909VilasVenue_Banner.png'}} style={{width: 400, height: 200}}/>
         </Row>
  
        </Grid>
      
  
  </ScrollView>
  
         
     
     
      </Container>
     )
  }

  
   
}
styles = StyleSheet.create({
    gridStyle: {

        backgroundColor: 'white', width:Dimensions.get('window').width/4, height:Dimensions.get('window').height/8 ,  flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'grey',
        borderRadius:10,
        borderWidth:2,
        marginTop:20,
        marginBottom:20,
        marginHorizontal:2
     },
     image:{
         width:Dimensions.get('window').height/16,
         height:Dimensions.get('window').height/16,
         flexDirection: 'column',
         justifyContent: 'flex-end',
         alignItems: 'center'
         
     }
})