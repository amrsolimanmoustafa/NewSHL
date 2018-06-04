import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableOpacity } from 'react-native'
import styles from './Styles/LinearGradientButtonStyle'
import { withNavigation } from "react-navigation";
import LinearGradient from "react-native-linear-gradient"


class LinearGradientButton extends Component {
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
        <TouchableOpacity onPress={this.props.press} style={this.props.style}>
          <LinearGradient
            colors={["rgb(57,180,76)", "#299386", "rgb(29,122,179)"]}
            style={this.props.style}
          >
            <Text style={this.props.textStyle}>
              {this.props.text}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
    )
  }
}

export default withNavigation(LinearGradientButton)
