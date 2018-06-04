import React, { Component } from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  TextInput,AsyncStorage,
  TouchableOpacity,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import {Images} from '../Themes';
import styles from './Styles/HomeScreenStyle'
import Header from "../Components/Header"
import Map from '../Components/Map';
import { withNavigation } from "react-navigation";
import {
  reverseCoordinatesToAdress,
  setCoordnates
} from "../actions/CommonServicesActions/commonServicesActions"
// import {refreshPlayerId} from "../../src/actions/authAction"
import PopupDialog from 'react-native-popup-dialog';
import StarRating from 'react-native-star-rating';
import {rateProvider,getServices} from './../actions/makeOrderAction'
import Base from '../Base';
import axios from 'axios';
import strings from '../strings';
let self;

const cancelResonesList = [
  {
      // "cancel_order_reasons_id": 1,
      // "cancel_order_reasons_ar": "لا أحد فى الموقع",
      // "cancel_order_reasons_en": "No one in the site",
      // "cancel_order_reasons_ur": "اس سائٹ میں کوئی بھی نہیں",
      // "created_at": null,
      // "updated_at": null
  },
  {
      // "cancel_order_reasons_id": 2,
      // "cancel_order_reasons_ar": "العميل يرفض الدفع",
      // "cancel_order_reasons_en": "Customer refuses to pay",
      // "cancel_order_reasons_ur": "کسٹمر ادا کرنے سے انکار",
      // "created_at": null,
      // "updated_at": null
  },
]

class HomeScreen extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 1,
      popupCommentText: ''
    }
    self = this
  }
  
  async componentWillMount(){
    const user_id = await AsyncStorage.getItem('user_id')
    console.log(user_id)
    this.watchPosition()
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  refreshServices(lat,lng){
    var base_url =new Base()     
    var  GOOGLEGEOLOCATION_URL="https://maps.googleapis.com/maps/api/geocode/json" 
    var APIKEY='AIzaSyBSSYckZ59ZW5MBPlGmPDvZu5Rzh9snPaQ'
    try {
      axios.get(GOOGLEGEOLOCATION_URL+'?latlng=' + lat + ','
        + lng+ 
        '&key='+APIKEY+'&language=en&region=EN"')
        .then((response) =>{
          console.log('response',response)
          self.props.getServices(response.data.results[0].address_components[2].long_name)      
        }).catch((error) =>{
          console.log(error);
        });
    }catch (error) {
      console.error(error);
    }
  }

  async watchPosition(){      
    self.watchId = navigator.geolocation.getCurrentPosition(
      (position) => {
        self.props.setCoordnates(position.coords.latitude,position.coords.longitude)
        var base_url =new Base()   
        var  GOOGLEGEOLOCATION_URL="https://maps.googleapis.com/maps/api/geocode/json" 
        var APIKEY='AIzaSyBSSYckZ59ZW5MBPlGmPDvZu5Rzh9snPaQ'
        try {
          axios.get(GOOGLEGEOLOCATION_URL+'?latlng=' + position.coords.latitude + ','
            + position.coords.longitude + 
            '&key='+APIKEY+'&language=en&region=EN"')
            .then((response) =>{
              console.log('response',response)
              self.props.getServices(response.data.results[0].address_components[2].long_name)    
            }).catch((error) =>{
              console.log(error);
            });
        }catch (error) {
          console.error(error);
        }
      },
      (error) => self.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000, distanceFilter: 100 },
    );
  }

  submitRate=()=>{
    console.log(self.props)
    self.props.rateProvider({'rate':self.state.starCount,'clint_rate_order_text':self.state.popupCommentText},self.props.makeOrder.order_id)
    self.cancelPopupDialog.dismiss()
  }

  render(){
    const {navigation} = this.props
    const base = new Base
    return(
      <View style={styles.container}>
        <ImageBackground style={styles.loginBackground} source={Images.loginBackground} resizeMode={'cover'}>
          <Header navigation={navigation}/>
          <View style={{flex: 1,padding: 12}}>
            <Map popup={this.cancelPopupDialog} watchPosition={this.refreshServices}/>
          </View>
       </ImageBackground>
       <PopupDialog
          ref={(popupDialog) => { this.cancelPopupDialog = popupDialog; }}
          width={220}
          height={420}
          haveTitleBar={false}
        >
          <View style={{flex: 1,backgroundColor: '#FFFFFF',borderRadius: 9,padding: 10}}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={{ uri:this.props.makeOrder.provider!=[]?base.icon_url+this.props.makeOrder.provider.personal_pic:''}}
                // source={require(base.icon_url+this.props.makeOrder.provider.personal_pic)}
                style={{marginTop:5,width: 90,height: 90,resizeMode: 'cover',borderRadius: 4}}
              />
              <Text style={{fontFamily: 'NeoSansArabic',fontSize: 14,color: '#707070',textAlign: 'center'}}>
                {this.props.makeOrder.provider!=[]? this.props.makeOrder.provider.users['user_name'] : ''}
              </Text>
              <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={this.state.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
                fullStarColor={'#1D7AB3'}
              />
            </View>
            {/* <View style={{marginTop: 10}}>
              {cancelResonesList.map((item,index)=>(
                <TouchableOpacity
                  key={index}
                  onPress={()=> this.setState({selectedReason: item})}
                  style={{flexDirection: 'row',alignItems: 'center',paddingVertical: 10}}
                >
                  <View style={{width: 20,height: 20,borderWidth: 1,borderColor: '#3C403F',borderRadius: 10,justifyContent: 'center',alignItems: 'center'}}>
                    <View style={{width: 10,height: 10,backgroundColor: this.state.selectedReason == item? '#3C403F' : 'transparent',borderRadius: 5}}/>
                  </View>
                  <Text style={{marginLeft: 10,fontFamily: 'NeoSansArabic',fontSize: 12,color: '#1D7AB3',textAlign: 'left'}}>
                    {item.cancel_order_reasons_en}
                  </Text>
                </TouchableOpacity>
              ))}
            </View> */}
            <View style={{marginTop: 10}}>
              <TextInput
              onChangeText={text=>{
                this.setState({popupCommentText: text})
              }}
                style={{height: 60,borderWidth: 1,borderColor: '#000000',borderRadius: 4}}
              />
            </View>
            <TouchableOpacity
              onPress={()=> this.submitRate()}
              style={{width: 180,height: 40,borderRadius: 20,marginTop: 18,alignSelf: 'center'}}
            >
              <ImageBackground
                source={require('../assets/images/Gradient_WideBackground_image.png')}
                style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}
              >
                <Text style={{color: '#ffffff',fontSize: 13,fontFamily: 'NeoSansArabic'}}>
                  {strings.approve}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </PopupDialog>
        {/* <PopupDialog
          ref={(popupDialog) => { this.endPopupDialog = popupDialog; }}
          width={220}
          height={320}
          haveTitleBar={false}
        >
          <View style={{flex: 1,backgroundColor: '#FFFFFF',borderRadius: 9,padding: 10}}>
            <Text style={{fontFamily: 'NeoSansArabic',fontSize: 16,color: '#707070',textAlign: 'center'}}>
              Rate Order
            </Text>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/images/Driver-image.png')}
                style={{width: 90,height: 90,resizeMode: 'cover',borderRadius: 4}}
              />
              <Text style={{fontFamily: 'NeoSansArabic',fontSize: 14,color: '#707070',textAlign: 'center'}}>
                محمد احمد مصطفي
              </Text>
              <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={this.state.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
                fullStarColor={'#1D7AB3'}
              />
            </View>
            <View style={{marginTop: 10}}>
              <TextInput
                style={{height: 60,borderWidth: 1,borderColor: '#000000',borderRadius: 4}}
              />
            </View>
            <TouchableOpacity
              onPress={()=> this.cancelOrder()}
              style={{width: 180,height: 40,borderRadius: 20,marginTop: 18,alignSelf: 'center'}}
            >
              <ImageBackground
                source={require('../assets/images/Gradient_WideBackground_image.png')}
                style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}
              >
                <Text style={{color: '#ffffff',fontSize: 13,fontFamily: 'NeoSansArabic'}}>
                  {'Approve'}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </PopupDialog> */}
      </View>
    );
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
}

const mapStateToProps = state => {
  return {
    common: state.common,
    user_id: state.auth.user_id,
    makeOrder: state.makeOrder,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, {
  getServices,
  rateProvider,
  // refreshPlayerId,
  reverseCoordinatesToAdress,
  setCoordnates
}) (withNavigation(HomeScreen))