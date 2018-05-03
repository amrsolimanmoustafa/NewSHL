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

class HomeScreen extends Component  {
  constructor(props) {
    super(props);

   
  }
  componentWillMount(){
   this.watchPosition()
  }
  componentDidMount() {
  
  
  }
  watchPosition(){
  var self=this
  //subscribe for location when changed
  
    
    
    this.watchId = navigator.geolocation.watchPosition(
    (position) => {
      console.log(position)
     
      this.props.setCoordnates(position.coords.latitude,position.coords.longitude)
    },
    (error) => self.setState({ error: error.message }),
    { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000, distanceFilter: 100 },
  );
}
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }
renderMap=()=>{
// this.renderMap().then(mapa=> { })
  
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

   }
  }
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, { reverseCoordinatesToAdress,setCoordnates }) (withNavigation(HomeScreen))
