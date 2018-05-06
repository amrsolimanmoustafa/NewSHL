import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/OtlobNowStyle'
import SearchButton from "./SearchButton"
import SideMapButtonsForOtlobNow from "./SideMapButtonsForOtlobNow"
import SelectedServices from "./SelectedServices"
import PriceLinearGradient from "./PriceLinearGradient"
import {selectedServices} from "../actions/makeOrderAction"
import { connect } from 'react-redux'
import { withNavigation } from "react-navigation";

 class OtlobNow extends Component {
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
    // console.log(this.props.makeOrder)
    return (
      <View style={styles.container}>
        <View  style={{
    height:"10%",
    width:"100%",
    marginBottom:"5%",
    position:'relative'

  }}/>
        <View style={styles.main}>
          <SelectedServices/>
          <SideMapButtonsForOtlobNow/>
        </View>
        <PriceLinearGradient text="تأكيد"/>
      </View>
    )
  }
}
// export default class OtlobNow
const mapStateToProps = state => {
  return {
    // services: state.makeOrder.services.data,
    // service: state.makeOrder.service ,
    // common: state.common,
    // compState:state.compState,
    makeOrder:state.makeOrder

  }
}
export default connect(mapStateToProps, {selectedServices}) (withNavigation(OtlobNow))