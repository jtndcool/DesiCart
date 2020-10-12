import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HeaderTab from '../components/header';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Dimensions, Image, ScrollView } from 'react-native';


export default function HomeScreen() {

   return(
    <Container>
    <HeaderTab/>
 
    <Grid>
       
       <Col style={styles.gridStyle}>
       <Image style={styles.image} source = {require('../../assets/restaurant.png')} />
       <Text style={{fontSize:20}}>Restaurants</Text>
       </Col>

       <Col style={styles.gridStyle}>
       <Image style={styles.image} source = {require('../../assets/grocery.png')} />
       <Text style={{fontSize:20}}>Grocery</Text>
       </Col>

       <Col style={styles.gridStyle}>
       <Image style={styles.image} source = {require('../../assets/grocery.png')} />
       <Text style={{fontSize:20}}>Milk Service</Text>
       </Col>

       <Col style={styles.gridStyle}>
       <Image style={styles.image} source = {require('../../assets/grocery.png')} />
       <Text style={{fontSize:20}}>Vegies</Text>
       </Col>

   
     </Grid>

     <Grid>
    

       <Col style={styles.gridStyle}>
       <Image style={styles.image} source = {require('../../assets/milk.png')} />
       <Text style={{fontSize:20}}>Milk Service</Text>
       </Col>

       <Col style={styles.gridStyle}>
       <Image style={styles.image} source = {require('../../assets/vege.png')} />
       <Text style={{fontSize:20}}>Vegies</Text>
       </Col>

   
     </Grid>
   
   
    </Container>
   )
   
}
styles = StyleSheet.create({
    gridStyle: {

        backgroundColor: '#d3d3d3', width:Dimensions.get('window').width/2, height:Dimensions.get('window').height/4 ,  flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'grey',
        borderRadius:10,
        borderWidth:2,
        marginTop:20,
        marginBottom:-20
     },
     image:{
         width:Dimensions.get('window').height/8,
         height:Dimensions.get('window').height/8,
         flexDirection: 'column',
         justifyContent: 'flex-end',
         alignItems: 'center'
         
     }
})