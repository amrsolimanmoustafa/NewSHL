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

  componentDidMount() {
  var self=this
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        console.log(position)
        // this.setState({
        //   latitude: position.coords.latitude,
        //   longitude: position.coords.longitude,
        //   error: null,
        // });
        this.props.setCoordnates(position.coords.latitude,position.coords.longitude)
      
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }
  // componentWillMount() {
  //   this.props.getServices()
  // }
  render() {
    return (
      <View style={styles.container}>
       <ImageBackground style={styles.loginBackground} source={Images.loginBackground} resizeMode={'cover'}>
        <Header/>

        <View style={styles.Map}>
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
