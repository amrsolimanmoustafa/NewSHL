import React, { Component } from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  Image,
  TouchableOpacity,
  I18nManager,
  AsyncStorage,
  StyleSheet,
  Dimensions,
  TextInput
} from 'react-native'
import { connect } from 'react-redux'
import * as Animatable from "react-native-animatable";
import RNRestart from 'react-native-restart';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {loginUser} from "../../src/actions/authAction"
import LinearGradientButton from "../Components/LinearGradientButton";
import {Images} from '../Themes';
import strings from '../strings'
const {width,height} = Dimensions.get('window')

class LoginScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      token_id: '',
      lang_id: '',
      phone: '',
      logedIn: null,
      loading: false,
      VerifyPhoneScreen: '',
      error: ''
    }
  }

  render () {
    return(
      <KeyboardAwareScrollView
        scrollEnabled={false}
        keyboardShouldPersistTaps={'handled'}
        style={styles.container}
      >
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
            <View style={styles.loginForm}>
              <Text style={styles.heading}>
                {strings.insertMobileNumber}
              </Text>
              <Text style={styles.heading2}>
                {strings.youNeedToSignin}
              </Text>
              <View style={{marginTop: 20,flexDirection: 'row',alignItems: 'center'}}>
                <Image
                  source={Images.SaudiFlag}
                  style={{width: 46,height: 50,resizeMode: 'cover'}}
                />
                <View style={{}}>
                  <TextInput
                    style={{width: width - (40+90),height: 40,marginLeft: 10,borderBottomWidth: 1,borderColor: '#707070',backgroundColor: '#ffffff',fontFamily: 'NeoSansArabic',fontSize: 20,color: '#1B76BA',textAlign: I18nManager.isRTL? 'right' : 'left'}}
                    placeholder={strings.mobile}
                    placeholderTextColor={'#1B76BA'}
                    underlineColorAndroid={'transparent'}
                    keyboardType={'phone-pad'}
                    onChangeText={text => this.setState({phone: text})}
                  />
                  {this.props.text}
                </View>
              </View>
              <View style={{alignSelf: 'center',marginTop: 30}}>
                <LinearGradientButton
                  style={{width: 230,height: 40,backgroundColor: 'red',borderRadius: 20,justifyContent: 'center',alignItems: 'center'}}
                  textStyle={{fontFamily: 'NeoSansArabic',fontSize: 16,color: '#FFFFFF'}}
                  text={strings.signup}
                  press={()=> this.doLogIn()}
                />
              </View>
            </View>
            <View style={{marginTop: 26,flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => this.changeLanguage('ar')}
                style={styles.languageButton}
              >
                <Image
                  source={Images.SaudiFlag}
                  style={styles.languageImage}
                />
                <Text style={styles.languageText}>
                  العربية
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.changeLanguage('en')}
                style={styles.languageButton}
              >
                <Image
                  source={Images.USFlag}
                  style={styles.languageImage}
                />
                <Text style={styles.languageText}>
                  English
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.changeLanguage('urdu')}
                style={styles.languageButton}
              >
                <Image
                  source={Images.IndiaFlag}
                  style={styles.languageImage}
                />
                <Text style={styles.languageText}>
                  اردو
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
  }

  doLogIn() {
    const {
      phone,
      token_id,
      logedIn,
      loading,
      VerifyPhoneScreen,
      error,
      lang_id
    } = this.state;
    let data = { phone: phone, token_id: token_id, lang_id: 'ar' };
    this.props.loginUser(data,this)
    this.setState({ loading: true });
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

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white"
  },
  loginBackground:{
    width: width,
    height: height,
    paddingTop: 20,
  },
  main:{
    flex: 1,
    paddingHorizontal: 12,
  },
  loginLogo: {
    width: 95,
    height: 130,
    marginTop: 26,
    alignSelf: 'center',
  },
  loginForm: {
    height: 300,
    marginTop: 40,
    padding: 20,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.45,
    shadowRadius: 6,
    shadowOffset: {width: 0,height: 3},
    backgroundColor: '#ffffff'
  },
  heading: {
    fontFamily: 'NeoSansArabic',
    fontSize: 20,
    color: 'rgb(27,118,186)',
    textAlign: 'center',
  },
  heading2: {
    fontFamily: 'NeoSansArabic',
    fontSize: 16,
    color: 'rgb(112,112,112)',
    textAlign: 'center',
    marginTop: 10,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  languageImage: {
    width: 46,
    height: 33
  },
  languageText: {
    fontFamily: 'NeoSansArabic',
    fontSize: 16,
    color: '#707070'
  },
})

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
}

export default connect(mapStateToProps, {
  loginUser
})(LoginScreen)