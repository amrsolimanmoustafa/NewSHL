import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView,ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import {Images} from '../Themes';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'
import Header from "../Components/Header"
import Map from '../Components/Map';

import { withNavigation } from "react-navigation";
import {reverseCoordinatesToAdress,setCoordnates} from "../actions/CommonServicesActions/commonServicesActions"
import OneSignal from 'react-native-onesignal'; // Import package from node modules
import {refreshPlayerId} from "../../src/actions/authAction"


const self=[];
class HomeScreen extends Component  {
  constructor(props) {
    super(props);

   
  }
  
  componentWillMount(){
    self=this

    // try{
    OneSignal.init('a3551d54-e1bc-4f12-874c-7f6cb7982f95',  {kOSSettingsKeyAutoPrompt : true});
    // }catch(e){
      // console.log(e)
    // }

    this.watchPosition()
   OneSignal.addEventListener('received', this.onReceived);
   OneSignal.addEventListener('opened', this.onOpened);
   OneSignal.addEventListener('ids', this.onIds);
  //  console.log('Device info: ',this.props);
}

componentWillUnmount() {
   OneSignal.removeEventListener('received', this.onReceived);
   OneSignal.removeEventListener('opened', this.onOpened);
   OneSignal.removeEventListener('ids', this.onIds);
   navigator.geolocation.clearWatch(this.watchId);

}

onReceived(notification) {
   console.log("Notification received: ", notification);
}

onOpened(openResult) {
 console.log('Message: ', openResult.notification.payload.body);
 console.log('Data: ', openResult.notification.payload.additionalData);
 console.log('isActive: ', openResult.notification.isAppInFocus);
 console.log('openResult: ', openResult);
}
 onIds(device) {
  console.log('ttttttttttttttttttt',self.props)

self.props.refreshPlayerId(self.props.user_id,device['userId'])
}
  componentDidMount() {
  
  
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

renderMap=()=>{
  
  return ( <View style={styles.Map}>
    <Map/>

  </View>)}
  render() {
    return (
      <View style={styles.container}>
       <ImageBackground style={styles.loginBackground} source={Images.loginBackground} resizeMode={'cover'}>
        <Header/>
        <View style={{flex: 1,padding: 12}}>
          <Map/>
        </View>
       </ImageBackground>
      </View>
    );
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
