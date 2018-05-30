import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text ,Image,TouchableOpacity } from 'react-native'
//Style
import styles from './Styles/VerifyPhoneStyle'
//Native Base Lib for UI elements
import {Form,Label,Input,Item,Radio,Right} from "native-base"
//Images
import {Images} from '../Themes';
//Linear Gradients
import  LinearGradientButton  from "../Components/LinearGradientButton";
import { withNavigation } from "react-navigation";
import { connect } from 'react-redux'

import {VerificationCodeActivation} from "../../src/actions/authAction"

 class VerifyPhone extends Component {

  constructor (props) {
    super(props)
    console.log(this.props)
    this.state={v_code:null,radioButtonSelected:true}

  }
  componentDidMount(){
    console.log(this.props)
   }



                 // // Prop type warnings
                 // static propTypes = {
                 //   someProperty: PropTypes.object,
                 //   someSetting: PropTypes.bool.isRequired,
                 // }
                 //
                 // // Defaults for props
                 // static defaultProps = {
                 //   someSetting: false

                 render() {
                   return <View style={styles.container}>
                       {/* Headings */}
                       <Text style={styles.heading2}>
                         {" "}
                         تم ارسال كود التأكيد للرقم التالي{" "}
                       </Text>
                       <Text style={styles.heading}>
                         {" "}
{this.props.user_phone}
                        {" "}
                       </Text>

                       {/* Input */}
                       <View style={styles.inputBoxView}>
                         <Item stackedLabel style={styles.itemStyle}>
                           <Label
                             style={styles.formInputPlaceholder}
                           >
                             {" "}
                             ادخل الكود{" "}
                           </Label>
                           <Input style={styles.input} onChangeText={(v_code)=>{
this.setState({v_code:v_code})
                            }} />
                         </Item>
                       </View>
                       {/* Radio Button Needs Modfication */}
                       <View style={styles.radioButton}>
                         <Radio selected={this.state.radioButtonSelected} onPress={()=>{
if(this.state.radioButtonSelected){
this.setState({radioButtonSelected:false})
}else{
  this.setState({radioButtonSelected:true})
}
                         }} />
                         <Text
                           style={styles.radioButtonTextBlue}
                         >
                           الشروط و الاحكام{" "}
                         </Text>
                         <Text style={styles.radioButtonText}>
                           الموافقة علي{" "}
                         </Text>
                       </View>
                       {/* Two Linear Gradient */}
                       <View style={{flex:1,width:"100%",justifyContent:'space-between'}} >
                         <LinearGradientButton style={{flex:1,hieght:'100%'}}  press={this.goToLoginScreen.bind(this)} navigateScreen="LoginScreen" text="تغيير رقم الجوال" />
</View>
                         <View style={{flex:1,width:"100%",position:'relative',zIndex:-2,justifyContent:'space-between'}} >

                         <LinearGradientButton   press={()=>{this.state.v_code!=null &&this.state.radioButtonSelected?
                           this.props.VerificationCodeActivation({'phone':this.props.user_phone,'v_code':this.state.v_code},this):null
                           this.goToHomeScreen.bind(this)
                          }
                           
                           } navigateScreen="HomeScreen" text="الدخول" />
                       </View>
                     </View>;
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
              //  export default  withNavigation(VerifyPhone)
              const mapStateToProps = state => {
                // this.props=state.auth.user.data
                let v=state
                console.log(v.auth.user_phone)
                return {
                  user: state.auth.user.data
                  ,user_phone:state.auth.user_phone,
                  activated_user:state.auth.activated_user
                }
              }
               export default connect(mapStateToProps, { VerificationCodeActivation }) (withNavigation(VerifyPhone));

