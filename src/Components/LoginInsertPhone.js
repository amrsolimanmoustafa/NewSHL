import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput
} from "react-native";
//Styles
import styles from './Styles/LoginInsertPhoneStyle'
import {Form,Label,Input,Item} from "native-base"
import {Images} from '../Themes';
import  LinearGradientButton  from "../Components/LinearGradientButton";

import axios from 'axios';
import { withNavigation } from "react-navigation";
import Toast from "react-native-simple-toast";
import { connect } from 'react-redux'
import {loginUser} from "../../src/actions/authAction"
import strings from '../strings'
import Button from "../containers/Components/button"

class LoginInsertPhone extends Component<> {
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

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.heading}>
          {strings.insertMobileNumber}
        </Text>
        <Text style={styles.heading2}>
          {strings.youNeedToSignin}
        </Text>
        <View style={styles.inputBoxView}>
          <Item stackedLabel style={styles.itemStyle}>
            <Label style={styles.formInputPlaceholder}>
              {strings.mobile}
            </Label>
            <TextInput
              onChangeText={text => this.setState({phone: text})}
              style={styles.input}
            />
            {this.props.text}
          </Item>
          <View style={styles.countryView}>
            <Text style={styles.countryText}>
              {strings.country}
            </Text>
            <Image source={Images.SaudiFlag} style={styles.countryFlag} />
          </View>
        </View>
        {this.buttonFaces()}
      </View>
    );
  }

  buttonFaces = () => {
    if (this.state.loading) {
      return (
        <ActivityIndicator
          size="large"
          colors={["rgb(57,180,76)", "#299386", "rgb(29,122,179)"]}
        />
      )
    } else {
      return(
        <View style={styles.opacity}>
          <Button            
            title={strings.signup}
            onPress={this.doLogIn.bind(this)}         
          />
          {/* <LinearGradientButton
            press={this.doLogIn.bind(this)}
            navigateScreen={this.state.VerifyPhoneScreen}
            text={strings.signup}
            style={{}}
          /> */}
        </View>
      )
    }
  };

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
    // console.log(this.state);
    // Default options are marked with *
    this.setState({ loading: true });
  }
}

const mapStateToProps = state => {
  // console.log(state.user)
  // console.log(this.props)
  return {
    user:state.auth.user,
  }
}

export default connect(mapStateToProps, { loginUser }) (withNavigation(LoginInsertPhone));