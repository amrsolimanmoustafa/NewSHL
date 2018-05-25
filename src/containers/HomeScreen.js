import React, { Component } from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  TextInput,
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
// import OneSignal from 'react-native-onesignal'; // Import package from node modules
import {refreshPlayerId} from "../../src/actions/authAction"
import PopupDialog from 'react-native-popup-dialog';
import StarRating from 'react-native-star-rating';

const self=[];

const cancelResonesList = [
  {
      "cancel_order_reasons_id": 1,
      "cancel_order_reasons_ar": "لا أحد فى الموقع",
      "cancel_order_reasons_en": "No one in the site",
      "cancel_order_reasons_ur": "اس سائٹ میں کوئی بھی نہیں",
      "created_at": null,
      "updated_at": null
  },
  {
      "cancel_order_reasons_id": 2,
      "cancel_order_reasons_ar": "العميل يرفض الدفع",
      "cancel_order_reasons_en": "Customer refuses to pay",
      "cancel_order_reasons_ur": "کسٹمر ادا کرنے سے انکار",
      "created_at": null,
      "updated_at": null
  },
]

class HomeScreen extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 1
    }
  }
  
  componentWillMount(){
    // try{
      // OneSignal.init('a3551d54-e1bc-4f12-874c-7f6cb7982f95');
      // }catch(e){
    // }
    this.watchPosition()
    self=this
    //OneSignal.addEventListener('received', self.onReceived);
    //OneSignal.addEventListener('opened', self.onOpened);
    //OneSignal.addEventListener('ids', self.onIds);

    //OneSignal.configure({
    //   onIdsAvailable: (device) =>{
    //       console.log('UserId = ', device.userId);
    //       console.log('PushToken = ', device.pushToken);
    //       // device.pushToken.map(e=>{
    //         alert(toString(device.userId))

    //       // })
    //   },
    // onNotificationReceived: function(notification) {
    //   console.log('MESSAGE RECEIVED: ', notification["notification"]["notificationID"]);
    // },
    // onNotificationOpened: function(openResult) {
    //     console.log('MESSAGE: ', openResult["notification"]["payload"]["body"]);
    //     console.log('DATA: ', openResult["notification"]["payload"]["additionalData"]);
    //     console.log('ISACTIVE: ', openResult["notification"]["isAppInFocus"]);
    //     // Do whatever you want with the objects here
    //     // _navigator.to('main.post', data.title, { // If applicable
    //     //  article: {
    //     //    title: openResult["notification"]["payload"]["body"],
    //     //    link: openResult["notification"]["payload"]["launchURL"],
    //     //    action: data.openResult["notification"]["action"]["actionSelected"]
    //     //  }
    //     // });
    // }
  // });
}



// onReceived(notification) {
//    console.log("Notification received: ", notification);
// }

// onOpened(openResult) {
//  console.log('Message: ', openResult.notification.payload.body);
//  console.log('Data: ', openResult.notification.payload.additionalData);
//  console.log('isActive: ', openResult.notification.isAppInFocus);
//  console.log('openResult: ', openResult);
// }
//  onIds(device) {

 
// self.props.refreshPlayerId(self.props.user_id,device['userId'])
// }
componentWillUnmount() {
  //  OneSignal.removeEventListener('received', this.onReceived);
  //  OneSignal.removeEventListener('opened', this.onOpened);
  //  OneSignal.removeEventListener('ids', this.onIds);
   navigator.geolocation.clearWatch(this.watchId);
}

// onReceived(notification) {
//    console.log("Notification received: ", notification);
// }

// onOpened(openResult) {
//  console.log('Message: ', openResult.notification.payload.body);
//  console.log('Data: ', openResult.notification.payload.additionalData);
//  console.log('isActive: ', openResult.notification.isAppInFocus);
//  console.log('openResult: ', openResult);
// }
//  onIds(device) {
//   console.log('ttttttttttttttttttt',self.props)

// self.props.refreshPlayerId(self.props.user_id,device['userId'])
// }
  
  componentDidMount(){
    this.cancelPopupDialog.show()
  }

  watchPosition(){
    var self=this
    //subscribe for location when changed    
    this.watchId = navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this.props.setCoordnates(position.coords.latitude,position.coords.longitude)
      },
      (error) => self.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000, distanceFilter: 100 },
    );
  }

  renderMap(){
    return( 
      <View style={styles.Map}>
        <Map/>
      </View>
    )
  }

  render(){
    return(
      <View style={styles.container}>
       <ImageBackground style={styles.loginBackground} source={Images.loginBackground} resizeMode={'cover'}>
        <Header/>
        <View style={{flex: 1,padding: 12}}>
          <Map/>
        </View>
       </ImageBackground>
       <PopupDialog
        ref={(popupDialog) => { this.cancelPopupDialog = popupDialog; }}
        width={220}
        height={350}
        haveTitleBar={false}
      >
        <View style={{flex: 1,backgroundColor: '#FFFFFF',borderRadius: 9,padding: 10}}>
          <Text style={{fontFamily: 'NeoSansArabic',fontSize: 16,color: '#707070',textAlign: 'center'}}>
            Cancel Order
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
      </PopupDialog>
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
    common:state.common,
    user_id:state.auth.user_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, { refreshPlayerId,reverseCoordinatesToAdress,setCoordnates }) (withNavigation(HomeScreen))