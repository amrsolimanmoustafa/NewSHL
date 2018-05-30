import React, { Component } from 'react'
import {
  View,
  Image,
  ImageBackground,
  AsyncStorage
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
import styles from './Styles/SplashScreenStyle'
import * as Animatable from "react-native-animatable";
import * as firebase from 'firebase';
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
    this.state = {
      loading: true,
      loggedIn: false,
    }
  }

  async componentDidMount(){
    const { navigation } = this.props;
    const result = await AsyncStorage.multiGet(['token_id','user_id'])
    console.log(result)
    setTimeout(() => {
      if(result[0][1]){
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
        });
        navigation.dispatch(resetAction);
      }else{
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
        });
        navigation.dispatch(resetAction);
      }
    },5000)
  }

  render() {
    if(this.state.loading){
      return(
        <ImageBackground source ={require("../assets/Assets/shlSplash_bg.png")}
          style={styles.backgroundImage}
          resizeMode={"cover"}
        >
          <Animatable.Image
            animation="bounceIn"
            iterationCount={9}
            direction="alternate"
            resizeMode={"cover"}
            source ={require("../assets/Assets/shlSplash_logo.png")}          
            resizeMode={"cover"}
          />    
        </ImageBackground>
      )
    }
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