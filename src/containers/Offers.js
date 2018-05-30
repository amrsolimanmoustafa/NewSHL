import React, { Component } from 'react';
import { 
  View, 
  FlatList,
  Text,
  Image,  
  TouchableOpacity,
  Dimensions,
 } from 'react-native';

//  local files //
import masterStyle from './masterStyle';
import Container from './Components/container';
import { Images } from './../Themes';

// style //
const {
  appGreenBgColor,
  appGreenColor,
  appBlueBgColor,
  appBlueColor,
  appGrayColor,
} = masterStyle;

export default class Offers extends Component {
  state = {
    sliderData: 
    [
      { id: 1, image: Images.offer3 },
      { id: 2, image: Images.offer4 },
      { id: 3, image: Images.offer2 },
    ],
    listData: [
      { id: 1, image: Images.offer1 },
      { id: 2, image: Images.offer2 },
    ]
    
  }
  ///////////////////////////////////////////  
  renderSlideritem = ({ item }) => {
    return (
      <View style={[ styles.sliderItemStyle]}>
        <Image source={item.image} style={[styles.offerImgStyle]}/>
      </View>
    );
  }
  ///////////////////////////////////////////
  renderOfferItem = ({ item }) => {
    return (
      <View style={[styles.offerViewStyle]}>
        <Image source={item.image} style={[styles.offerImgStyle, { resizeMode: 'contain' }]}/>
      </View>
    );
  }
  /////////////////////////////////////////// 
  render() {   
    return (
      <View style={[masterStyle.container]}>
        <Container style={{ paddingHorizontal: 15,}} title='العروض' >
          {/* // horizontal list // */}
          <View style={[styles.silderContainer]}>
            <FlatList
            data={this.state.sliderData}
            keyExtractor={item => `${item.id}`}
            renderItem={this.renderSlideritem}
            horizontal
            inverted
            showsHorizontalScrollIndicator
            ItemSeparatorComponent={() => <View style={styles.speratorStyle}/>}
            />
          </View>
          {/* // vertical list // */}
          <FlatList
          data={this.state.listData}
          keyExtractor={item => `${item.id}`}
          renderItem={this.renderOfferItem}
          style={styles.verticalList}
          />
        </Container>
      </View>
    )
  }
};

const styles = {
  offerViewStyle: {
    width: '100%',
    marginTop: 15,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: { height: 2, width: 0 } ,
    elevation: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 3,

  },
  offerImgStyle: {
    flex: 1,
    width: null,
    resizeMode: 'contain'
  },
  sliderItemStyle: {
    marginTop: 0, 
    // marginHorizontal: 5,
    width: 0.8 * Dimensions.get('window').width,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: { height: 2, width: 0 } ,
    elevation: 2,
    // borderColor: 'white',
    // borderWidth: 1,
  },
  silderContainer: {
    height: 170,
    width: '100%',
    marginTop: 10,
    padding: 3,
  },
  verticalList: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center'
  },
  speratorStyle: {
    width: 7
  }

};