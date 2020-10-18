import React from 'react';
import {Image, StyleSheet, View, FlatList} from 'react-native';
import { Container, Header, Content,Title, Subtitle, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import  { Component } from 'react';
import Posts from '../components/restauarntCards';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default class  Restaurants extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      dataSource:[]
     };
   }
 
  componentDidMount(){
    fetch("https://restaurants-bd084.firebaseio.com/restauarnts.json")
    .then(response => response.json())
    .then((responseJson)=> {
          this.setState({
            dataSource:responseJson
          })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }

  render() {

  
    return(
      <Container>
      <Header>
      <Left>
            <Button transparent onPress={()=> this.props.navigation.navigate("Home")}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
        <Body>
          <Title>Restaurants</Title>
          <Subtitle>Please Select </Subtitle>
        </Body>
        <Right />
      </Header>

      <FlatList style={styles.myState} keyExtractor={item => item.id} 
          data={this.state.dataSource}
          renderItem={({item}) => 
          <View >
              <Card style={styles.cardStyle}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://banner2.cleanpng.com/20180413/oyq/kisspng-restaurant-logo-lunch-5ad1606381cc10.5146934915236711395317.jpg'}} />
                <Body>
    <Text>{item.name}</Text>
    <Text note>{item.type}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: item.imgUrl}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                <MaterialCommunityIcons style={styles.iconStyle} name="crosshairs-gps" color={'black'} size={20} />
                
    <Text style={{color:'black'}}>{item.location}</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                <MaterialCommunityIcons  style={styles.iconStyle}  name="cash" color={'black'} size={20} />
    <Text style={{color:'black'}}>{item.cost}</Text>
                </Button>
              </Body>
              <Right>
                <Text  style={{color:'black'}}>127 orders since lockdown</Text>
              </Right>
            </CardItem>
          </Card>
            {/* <Posts name={item.name} type={item.type} location={item.location} cost={item.cost} url={item.imgUrl}/> */}
          </View>
          }
        />
        
    
      
     {/* {
       this.state.dataSource.map(function(name,index){
         return  <Posts style={styles.myState}/>
      })
     } */}
  
</Container>
   )
  }
  

   
   
}
styles = StyleSheet.create({
    myState: {

        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        margin:0
     }
})



