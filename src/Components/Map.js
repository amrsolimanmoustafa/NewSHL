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

  constructor(props) {
    super(props);
  
  }
 
  render () {
    console.log('lat ',this.props.lat)
    return (
      <View style={styles.container}>
       <MapView
          style={styles.map}
          initialRegion={{
            latitude: this.props.lat? this.props.lat:6.2672295570373535,
            longitude:this.props.lng? this.props.lng:31.229478498675235,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
        </MapView>
          <OtlobMain/>
          {/* <OtlobNow/> */}
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