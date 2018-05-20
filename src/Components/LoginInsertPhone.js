import React, { Component } from 'react'
// import PropTypes from 'prop-types';
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
//Native Base For UI Elements
import {Form,Label,Input,Item} from "native-base"
//Images
import {Images} from '../Themes';
//Two Linear Gradients
import  LinearGradientButton  from "../Components/LinearGradientButton";
//services
import axios from 'axios';
import { withNavigation } from "react-navigation";
import Toast from "react-native-simple-toast";
import { connect } from 'react-redux'
import {loginUser} from "../../src/actions/authAction"
 class LoginInsertPhone extends Component<props> {
   state = { token_id:'',lang_id:'',phone: "", logedIn: null, loading: false, VerifyPhoneScreen: "", error: "" };
   // // Prop type warnings
   // static propTypes = {
   //   someProperty: PropTypes.object,
   //   someSetting: PropTypes.bool.isRequired,
   // }
   //
   // // Defaults for props
   // static defaultProps = {
   //   someSetting: false
   // }

   componentWillMount() {
   }
   render() {
     return <View style={styles.container}>
         {/* Headings */}
         <Text style={styles.heading}> ادخل رقم الجوال </Text>
         <Text style={styles.heading2}>
           يجب تسجيل الدخول حتي تستطيع الاستفادة من تطبيق سهل
         </Text>
         <View style={styles.inputBoxView}>
           {/* Input */}
           <Item stackedLabel style={styles.itemStyle}>
             <Label style={styles.formInputPlaceholder}>رقم الهاتف</Label>
             <TextInput placeholder="" onChangeText={text => this.setState({
                   phone: text
                 })} style={styles.input} />
                 {this.props.text}
           </Item>
           {/* Flags */}
           <View style={styles.countryView}>
             <Text style={styles.countryText}> الدولة </Text>
             <Image source={Images.SaudiFlag} style={styles.countryFlag} />
           </View>
         </View>
         {/* Linear Gradient */}
         {this.buttonFaces()}
       </View>;
   }
   //switch loading and login
   buttonFaces = () => {
     /*if (this.state.loading) {
       return (<ActivityIndicator start={{ x: 0.0, y: 0.25 }} end={{ x: 0.9, y: 1.0 }} locations={[0, 0.5, 0.9]} size="large" colors={["rgb(57,180,76)", "#299386", "rgb(29,122,179)"]}) />;
     } else {*/
       return <View style={styles.opacity}>
           <LinearGradientButton press={this.doLogIn.bind(this)} navigateScreen={this.state.VerifyPhoneScreen} text="التسجيل" style={{}} />
         </View>;
     //}
   };

   doLogIn() {
     //  logedIn: null, loading: false, VerifyPhoneScreen:''
     const { phone, token_id, logedIn, loading, VerifyPhoneScreen, error, lang_id} = this.state;



     let data = { phone: phone, token_id: token_id, lang_id: 1 };
this.props.loginUser(data,this)
// console.log(this.state);
     // Default options are marked with *
     this.setState({ loading: true });
     let self = this;

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

// export default  withNavigation(LoginInsertPhone)
