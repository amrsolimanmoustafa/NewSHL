import React, { Component } from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  Image,
  TouchableOpacity,
  I18nManager,
  AsyncStorage
} from 'react-native'
import { connect } from 'react-redux'
import * as Animatable from "react-native-animatable";
import RNRestart from 'react-native-restart';

import LoginInsertPhone from "../Components/LoginInsertPhone.js"
import styles from './Styles/LoginScreenStyle'
import {Images} from '../Themes';
import strings from '../strings'

class LoginScreen extends Component {
  constructor(props){
    super(props)
  }

  render () {
    return(
      <View style={styles.container}>
        <ImageBackground
          style={styles.loginBackground}
          source={Images.loginBackground}
          resizeMode={"cover"}
        >
          <View style={styles.main}>
            <Image
              source={Images.loginLogo}
              style={styles.loginLogo}
              resizeMode={"cover"}
            />
            <View style={styles.input}>
              <LoginInsertPhone />
            </View>
            <View style={styles.allLanguages}>
              <TouchableOpacity
                onPress={() => this.changeLanguage('urdu')}
                style={styles.languages}
              >
                <Text style={styles.flagTextStyle}>
                  اردو
                </Text>
                <Image source={Images.IndiaFlag} style={styles.flagStyle} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.changeLanguage('en')}
                style={styles.languages}
              >
                <Text style={styles.flagTextStyle}>
                  English
                </Text>
                <Image source={Images.USFlag} style={styles.flagStyle} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.changeLanguage('ar')}
                style={styles.languages}
              >
                <Text style={styles.flagTextStyle}>
                  العربية
                </Text>
                <Image source={Images.SaudiFlag} style={styles.flagStyle} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

  goToHomeScreen() {
    var self=this
    self.props.navigation.navigate("HomeScreen");
  }

  async changeLanguage(language){
    await AsyncStorage.setItem('uiLanguage',language)
    if(language == 'en'){
      I18nManager.forceRTL(false);
      I18nManager.isRTL = false;
      I18nManager.allowRTL(false)
    }else {
      I18nManager.forceRTL(true);
      I18nManager.isRTL = true;
    }
    RNRestart.Restart();
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)