import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableOpacity } from 'react-native'
import styles from './Styles/PriceLinearGradientStyle'
import LinearGradient from "react-native-linear-gradient"
import {selectedServices} from "../actions/makeOrderAction"
import { connect } from 'react-redux'
import { withNavigation } from "react-navigation";

class PriceLinearGradient extends Component {
 
  render () {
    console.log(this.props.makeOrder.selectedServices[0].services_zone[0].price)
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.opacity}>
          <LinearGradient start={{ x: 0.0, y: 0.35 }} end={{ x: 0.9, y: 0.3 }} locations={[0, 0.5, 0.9]} colors={["rgb(57,180,76)", "#299386", "rgb(29,122,179)"]} style={styles.linearGradient}>
            <View style={styles.priceView}><Text style={styles.priceText}>{this.props.makeOrder.selectedServices[0].services_zone[0].price}ريال الدفع كاش</Text></View>
            <Text style={styles.buttonText}>{this.props.text}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    )
  }
}
const mapStateToProps = state => {
  return {
    // services: state.makeOrder.services.data,
    // service: state.makeOrder.service ,
    // common: state.common,
    // compState:state.compState,
    makeOrder:state.makeOrder

  }
}
export default connect(mapStateToProps, {selectedServices}) (withNavigation(PriceLinearGradient))