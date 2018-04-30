import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView,ImageBackground,Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/VerifyPhoneScreenStyle'
import {Images} from '../Themes';
//The box inside the elevation
import VerifyPhone from "../Components/VerifyPhone";
class VerifyPhoneScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
                                          {/* ImageBackground */}
        <ImageBackground style={styles.loginBackground} source={Images.loginBackground} resizeMode={'cover'}>
          <View style={styles.main}>
                                              {/* logo */}
            <Image source={Images.loginLogo} style={styles.loginLogo}/>
            <View style={styles.input}>
                                 {/* the box containing with elevation inside it a component */}
            <VerifyPhone />
            </View>
          </View>
        </ImageBackground> 
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPhoneScreen)
