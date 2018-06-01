import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from './Styles/VerifyPhoneStyle'
import {Form,Label,Input,Item,Radio,Right} from "native-base"
import {Images} from '../Themes';
import  LinearGradientButton  from "../Components/LinearGradientButton";
import { withNavigation } from "react-navigation";
import { connect } from 'react-redux'
import Button from '../containers/Components/button'
import {VerificationCodeActivation} from "../../src/actions/authAction"
import strings from '../strings'

class VerifyPhone extends Component {
  constructor (props) {
    super(props)
    console.log(this.props)
    this.state = {
      v_code: null,
      radioButtonSelected: true
    }
  }

  componentDidMount(){
    console.log(this.props)
  }
                 
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.heading2}>
          {strings.theConfirmationCodeHasBeenSentToThisNumber}
        </Text>
        <Text style={styles.heading}>
          {this.props.user_phone}
        </Text>
        <View style={styles.inputBoxView}>
          <Item stackedLabel style={styles.itemStyle}>
            <Label
              style={styles.formInputPlaceholder}
            >
              {strings.enterTheCode}
            </Label>
            <Input
              style={styles.input}
              onChangeText={(v_code)=>this.setState({v_code:v_code})}
            />
          </Item>
        </View>
        <View style={styles.radioButton}>
          <Radio
            selected={this.state.radioButtonSelected}
            onPress={()=>{
              if(this.state.radioButtonSelected){
              this.setState({radioButtonSelected:false})
              }else{
                this.setState({radioButtonSelected:true})
              }
            }}
          />
          <Text
            style={styles.radioButtonTextBlue}
          >
            {strings.termsAndConditions}
          </Text>
          <Text style={styles.radioButtonText}>
            {strings.accept}
          </Text>
        </View>
        <View style={{flex:1,width:"100%",justifyContent:'space-between'}}>
        <Button
          onPress={this.goToLoginScreen.bind(this)}
          title={strings.changeMobileNumber}
        />
        {/* <LinearGradientButton
            style={{flex:1,hieght:'100%'}}
            press={this.goToLoginScreen.bind(this)}
            navigateScreen="LoginScreen"
            text={strings.changeMobileNumber}
          />
            text="تغيير رقم الجوال"
          /> */}
 
        </View>
        <View style={{flex:1,width:"100%",position:'relative',zIndex:-2,justifyContent:'space-between'}}>
          <Button
            onPress={()=>{
              if(this.state.v_code != null && this.state.radioButtonSelected){
                this.props.VerificationCodeActivation({'phone': this.props.user_phone,'v_code': this.state.v_code},this)
              }
              this.goToHomeScreen.bind(this)
            }}
            title={strings.login}
          />
          {/* <LinearGradientButton
            press={()=>{
              if(this.state.v_code != null && this.state.radioButtonSelected){
                this.props.VerificationCodeActivation({'phone': this.props.user_phone,'v_code': this.state.v_code},this)
              }
              this.goToHomeScreen.bind(this)
            }}
            navigateScreen="HomeScreen"
            text={strings.login}
          />
            text="الدخول"
          /> */}
        </View>
      </View>
    );
  }

  goToLoginScreen() {
    var self=this
    self.props.navigation.navigate("LoginScreen");
  }

  goToHomeScreen() {
    var self=this
    console.log(self.props.activated_user)
    // self.props.navigation.navigate("HomeScreen");
  }
}

const mapStateToProps = state => {
  // this.props=state.auth.user.data
  let v = state
  console.log(v.auth.user_phone)
  return {
    user: state.auth.user.data,
    user_phone: state.auth.user_phone,
    activated_user: state.auth.activated_user
  }
}

export default connect(mapStateToProps, { VerificationCodeActivation }) (withNavigation(VerifyPhone));
