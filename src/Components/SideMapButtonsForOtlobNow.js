import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableOpacity,Image} from 'react-native'
import styles from './Styles/SideMapButtonsForOtlobNowStyle'
import {Images} from "../Themes"
export default class SideMapButtonsForOtlobNow extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.SideComponents} >
      <TouchableOpacity style={styles.touchable}>
        <Image style={styles.image} source={Images.StarLocation}/>
    
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}>
      <Image style={styles.image} source={Images.satalite}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}>
        <Image style={styles.image} source={Images.Kabba}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}>
        <Image style={styles.image} source={Images.locationmap}/>
      </TouchableOpacity>
    </View>
    )
  }
}
