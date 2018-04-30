import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,Image } from 'react-native'
import styles from './Styles/SelectedServicesStyle'
import { Images } from '../Themes';

export default class SelectedServices extends Component {
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
        <View style={styles.ServiceView}>
        <Image source={Images.MainSarf} style={styles.ServiceImage}/>
        </View>
        <View style={styles.SubServiceView}>
        <Image source={Images.MainSarf} style={styles.ServiceImage}/>
        </View>
      </View>
    )
  }
}
