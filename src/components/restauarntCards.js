import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://banner2.cleanpng.com/20180413/oyq/kisspng-restaurant-logo-lunch-5ad1606381cc10.5146934915236711395317.jpg'}} />
                <Body>
                  <Text>Urban Dhaba</Text>
                  <Text note>Pure Veg</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://content3.jdmagicbox.com/comp/thane/n3/022pxx22.xx22.171201150314.d9n3/catalogue/urban-dhaba-mira-road-thane-north-indian-restaurants-e2s3o.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                <MaterialCommunityIcons style={styles.iconStyle} name="crosshairs-gps" color={'black'} size={20} />
                
                  <Text style={{color:'black'}}>Pilibhit Road, Puranpur</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                <MaterialCommunityIcons  style={styles.iconStyle}  name="cash" color={'black'} size={20} />
                  <Text style={{color:'black'}}>350 for 2</Text>
                </Button>
              </Body>
              <Right>
                <Text  style={{color:'black'}}>458 orders since lockdown</Text>
              </Right>
            </CardItem>
          </Card>


          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://banner2.cleanpng.com/20180413/oyq/kisspng-restaurant-logo-lunch-5ad1606381cc10.5146934915236711395317.jpg'}} />
                <Body>
                  <Text>Lalli Bawa Dhaba</Text>
                  <Text note>Pure Veg</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.bcmtouring.com/forums/attachments/lalli-bawa-dhaba-jpg.2784/'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                <MaterialCommunityIcons style={styles.iconStyle} name="crosshairs-gps" color={'black'} size={20} />
                
                  <Text style={{color:'black'}}>Railway Station Puranpur</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                <MaterialCommunityIcons  style={styles.iconStyle}  name="cash" color={'black'} size={20} />
                  <Text style={{color:'black'}}>100 for 2</Text>
                </Button>
              </Body>
              <Right>
                <Text  style={{color:'black'}}>99 orders since lockdown</Text>
              </Right>
            </CardItem>
          </Card>


          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://banner2.cleanpng.com/20180413/oyq/kisspng-restaurant-logo-lunch-5ad1606381cc10.5146934915236711395317.jpg'}} />
                <Body>
                  <Text>Crazy Chicken vaala</Text>
                  <Text note>Mughlai</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://content3.jdmagicbox.com/comp/chandigarh/r1/0172px172.x172.131223120922.s9r1/catalogue/crazy-chicken-mani-majra-chandigarh-indian-restaurants-4aqqvtu.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                <MaterialCommunityIcons style={styles.iconStyle} name="crosshairs-gps" color={'black'} size={20} />
                
                  <Text style={{color:'black'}}>Shahbaad Chowk, Puranpur</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                <MaterialCommunityIcons  style={styles.iconStyle}  name="cash" color={'black'} size={20} />
                  <Text style={{color:'black'}}>240 for 2</Text>
                </Button>
              </Body>
              <Right>
                <Text  style={{color:'black'}}>567 orders since lockdown</Text>
              </Right>
            </CardItem>
          </Card>


          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://banner2.cleanpng.com/20180413/oyq/kisspng-restaurant-logo-lunch-5ad1606381cc10.5146934915236711395317.jpg'}} />
                <Body>
                  <Text>Peepa's Chicken</Text>
                  <Text note>Mughlai</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://res.cloudinary.com/foodondeal/image/upload/c_scale,w_902/v1586495575/Peppa_jerk_chicken_spot_near_me.jpg'}} style={{height: 200, width: null, flex: 1}}/>
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


          <Card>
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


          <Card>
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

styles = StyleSheet.create({
  iconStyle:{
    marginRight:-10,
    color:'black'
  },
  textStyle:{
    color:'black'
  },
  cardStyle:{
    borderColor:'black',
    borderWidth:5,
    borderRadius:10
  }
})