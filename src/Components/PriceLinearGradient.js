import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableOpacity } from 'react-native'
import styles from './Styles/PriceLinearGradientStyle'
import LinearGradient from "react-native-linear-gradient"
export default class PriceLinearGradient extends Component {
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
        <TouchableOpacity style={styles.opacity}>
          <LinearGradient start={{ x: 0.0, y: 0.35 }} end={{ x: 0.9, y: 0.3 }} locations={[0, 0.5, 0.9]} colors={["rgb(57,180,76)", "#299386", "rgb(29,122,179)"]} style={styles.linearGradient}>
            <View style={styles.priceView}><Text style={styles.priceText}>100 ريال الدفع كاش</Text></View>
            <Text style={styles.buttonText}>{this.props.text}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    )
  }
}
