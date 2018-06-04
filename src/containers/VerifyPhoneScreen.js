import React, { Component } from 'react'
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  I18nManager,
} from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LinearGradientButton from "../Components/LinearGradientButton";
import {Images} from '../Themes';
import {VerificationCodeActivation} from "../../src/actions/authAction"
import strings from '../strings'
const {width,height} = Dimensions.get('window')

class VerifyPhoneScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      v_code: null,
    }
  }

  render () {
    return (
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
              <Text style={styles.heading2}>
                {strings.theConfirmationCodeHasBeenSentToThisNumber}
              </Text>
              <Text style={styles.heading}>
                {this.props.user_phone}
              </Text>
              <TextInput
                style={{width: width - (40+90),height: 40,marginTop: 20,borderBottomWidth: 1,borderColor: '#707070',backgroundColor: '#ffffff',fontFamily: 'NeoSansArabic',fontSize: 20,color: '#1B76BA',textAlign: 'center',alignSelf: 'center'}}
                placeholder={strings.enterTheCode}
                placeholderTextColor={'#1B76BA'}
                underlineColorAndroid={'transparent'}
                keyboardType={'phone-pad'}
                onChangeText={text => this.setState({v_code: text})}
              />
              <View style={{alignSelf: 'center',marginTop: 30}}>
                <LinearGradientButton
                  style={{width: 230,height: 40,borderRadius: 20,justifyContent: 'center',alignItems: 'center'}}
                  textStyle={{fontFamily: 'NeoSansArabic',fontSize: 16,color: '#FFFFFF'}}
                  text={strings.login}
                  press={()=> this.doLogIn()}
                />
              </View>
              <View style={{alignSelf: 'center',marginTop: 10}}>
                <LinearGradientButton
                  style={{width: 230,height: 40,borderRadius: 20,justifyContent: 'center',alignItems: 'center'}}
                  textStyle={{fontFamily: 'NeoSansArabic',fontSize: 16,color: '#FFFFFF'}}
                  text={strings.changeMobileNumber}
                  press={()=> this.goToLoginScreen()}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    )
  }

  doLogIn(){
    if(this.state.v_code){
      this.props.VerificationCodeActivation({'phone': this.props.user_phone,'v_code': this.state.v_code},this)
    }
  }

  goToLoginScreen() {
    this.props.navigation.goBack();
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
    height: 400,
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
    marginTop: 10,
  },
  heading2: {
    fontFamily: 'NeoSansArabic',
    fontSize: 16,
    color: 'rgb(112,112,112)',
    textAlign: 'center',
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
    user: state.auth.user.data,
    user_phone: state.auth.user_phone,
    activated_user: state.auth.activated_user
  }
}

export default connect(mapStateToProps, {
  VerificationCodeActivation
})(VerifyPhoneScreen)