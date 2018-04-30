import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableOpacity } from 'react-native'
import styles from './Styles/OtlobMainStyle'
import SideMapButtons from "../Components/SideMapButtons"
import MainButtons from "../Components/MainButtons"
import SearchButton from "../Components/SearchButton"
export default class OtlobMain extends Component {
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
          <SearchButton/>
          <SideMapButtons/>
          <MainButtons/>
      </View>
    )
  }
}
