import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView,ImageBackground,Image,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import LoginInsertPhone from "../Components/LoginInsertPhone.js"

// Styles
import styles from './Styles/LoginScreenStyle'
import {Images} from '../Themes';
//auth api
import * as Animatable from "react-native-animatable";

class LoginScreen extends Component {
  constructor(){
    super()
// LoginScreen = Animatable.createAnimatableComponent(LoginScreen);


  }
  render () {

  //  console.log(auth.login())
    return <View style={styles.container}>


        <ImageBackground style={styles.loginBackground} source={Images.loginBackground} resizeMode={"cover"}>

          <Animatable.View animation="fadeInLeftBig" iterationCount={1} direction="alternate" style={styles.main}>
            <Animatable.Image source={Images.loginLogo} style={styles.loginLogo} animation="bounceIn" iterationCount={4} direction="alternate" resizeMode={"cover"} />
            {/* <Image source={Images.loginLogo} style={styles.loginLogo} /> */}
            <View style={styles.input}>
              <LoginInsertPhone />
            </View>
            <View style={styles.allLanguages}>
              <TouchableOpacity onPress={() => {
                  this.base;
                }} style={styles.languages}>
                <Text style={styles.flagTextStyle}>اردو</Text>
                <Image source={Images.IndiaFlag} style={styles.flagStyle} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.languages}>
                <Text style={styles.flagTextStyle}>English</Text>
                <Image source={Images.USFlag} style={styles.flagStyle} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.goToHomeScreen.bind(this)} navigateScreen="HomeScreen" style={styles.languages}>
                <Text style={styles.flagTextStyle}>العربية</Text>
                <Image source={Images.SaudiFlag} style={styles.flagStyle} />
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </ImageBackground>
      </View>;
  }
  goToHomeScreen() {
    var self=this

  self.props.navigation.navigate("HomeScreen");

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

// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
module.exports = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
