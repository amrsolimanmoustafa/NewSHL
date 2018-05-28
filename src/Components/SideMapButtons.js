import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableOpacity,Image} from 'react-native'
import styles from './Styles/SideMapButtonsStyle'
import {Images} from "../Themes"

export default class SideMapButtons extends Component {

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
