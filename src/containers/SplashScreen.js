import React, { Component } from 'react'
import { View,Image,ImageBackground } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SplashScreenStyle'
import * as Animatable from "react-native-animatable";


import * as firebase from 'firebase';

// should go in a secret file
var config = {
    apiKey: "AIzaSyAm7qwx12pV5PdH100bkZQTtLfR6BGKk5U",
    authDomain: "shlapp-fd7eb.firebaseapp.com",
    databaseURL: "https://shlapp-fd7eb.firebaseio.com",
    projectId: "shlapp-fd7eb",
    storageBucket: "shlapp-fd7eb.appspot.com",
    messagingSenderId: "663864784757"
  };
  
  firebase.initializeApp(config);
class SplashScreen extends Component {
  constructor(){
    super()
    SplashScreen = Animatable.createAnimatableComponent(SplashScreen);


  }
  componentDidMount(){
    const { navigate } = this.props.navigation;
setTimeout(() => navigate("LoginScreen", {screen: "LoginScreen"}),5000);

  }
  render () {
    return (

      <ImageBackground source ={require("../assets/Assets/shlSplash_bg.png")}
      style={styles.backgroundImage}
      resizeMode={"cover"}
      >
  <Animatable.Image
animation="bounceIn" iterationCount={9} direction="alternate" resizeMode={"cover"}
  source ={require("../assets/Assets/shlSplash_logo.png")}
 
 resizeMode={"cover"}/>    
      </ImageBackground>

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

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
// module.exports =connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
