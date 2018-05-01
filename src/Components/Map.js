import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableOpacity,Image } from 'react-native'
import styles from './Styles/MapStyle'
import MapView from 'react-native-maps';
import { Icon, Button } from 'native-base';
import {Images} from '../Themes';
import SideMapButtons from "./SideMapButtons"
import MainButtons from "./MainButtons"
import OtlobMain from "./OtlobMain"
import OtlobNow from "./OtlobNow"
import {reverseCoordinatesToAdress} from "../actions/CommonServicesActions/commonServicesActions"
import { withNavigation } from "react-navigation";
import { connect } from 'react-redux'
class Map extends Component {
state= {lat:0,lng:0}
  constructor(props) {
    super(props);
  
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        this.setState({lat:position.coords.latitude,lng:position.coords.longitude})

      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render () {


    console.log('lat ',this.props.common.lat)
    return (
      <View style={styles.container}>
      
       <MapView
          style={styles.map}
          initialRegion={{
            latitude: this.state.lat,
            longitude:this.state.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          
          
          followsUserLocation={true}
          >
        </MapView>
          {/* <OtlobMain/> */}
          <OtlobNow/>
          {/* <FavoritePlaces/> */}
 
      </View>
    )
  }
 }
 const mapStateToProps = state => {
  return {
    common:state.common
   }
  }
 export default connect(mapStateToProps, {reverseCoordinatesToAdress }) (withNavigation(Map))