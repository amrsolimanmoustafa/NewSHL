import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/OtlobNowStyle'
import SearchButton from "./SearchButton"
import SideMapButtonsForOtlobNow from "./SideMapButtonsForOtlobNow"
import SelectedServices from "./SelectedServices"
import PriceLinearGradient from "./PriceLinearGradient"
export default class OtlobNow extends Component {
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
        <View style={styles.main}>
          <SelectedServices/>
          <SideMapButtonsForOtlobNow/>
        </View>
        <PriceLinearGradient text="تأكيد"/>
      </View>
    )
  }
}
