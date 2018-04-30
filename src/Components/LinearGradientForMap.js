import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableOpacity } from 'react-native'
import styles from './Styles/LinearGradientForMapStyle'
import { withNavigation } from "react-navigation";
import LinearGradient from "react-native-linear-gradient"

class LinearGradientForMap extends Component {
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
    return <View style={styles.container}>
        <TouchableOpacity onPress={this.props.press} style={styles.opacity} >
          <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.9, y: 1.0 }} locations={[0, 0.5, 0.9]} colors={["rgb(57,180,76)", "#299386", "rgb(29,122,179)"]} style={styles.linearGradient}>
            <Text style={styles.buttonText}>{this.props.text}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>;
  }
}

export default withNavigation(LinearGradientForMap)