import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/SearchButtonStyle'
import {Icon} from "native-base"

export default class SearchButton extends Component {
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
      <View style={styles.container}>
        <TouchableOpacity style={styles.searchTouchable}>
          <Text style={styles.searchTouchableText}> البحث </Text>
          <Icon name="search" type="EvilIcons" style={styles.searchTouchableIcon}/>
        </TouchableOpacity>
      </View>
    )
  }
}
