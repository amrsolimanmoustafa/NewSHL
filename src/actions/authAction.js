import { FETCH_POSTS, LOGIN,ACTIVATION_STATE } from "../actions/types";
import Base from "../Base"
import axios from 'axios';
import { withNavigation } from "react-navigation";
import Toast from "react-native-simple-toast";
import { AsyncStorage } from 'react-native'

export const refreshPlayerId=(user_id,token_id)=>dispatch=>{
  console.log('token uploaded',user_id,token_id)
  var base_url =new Base()
  var REFRESH_TOKEN="http://" + base_url.baseUrl + "updateusertoken/"+user_id
  try {
    axios
      .put(REFRESH_TOKEN,{'token_id':token_id})
      .then((res) =>{
        console.log('token uploaded',res)
        //dispatch({
          //type:,
          //payload:user
        //})
      })
      .catch(function(error) {
      
      });
  }catch (error) {
  
  }
}

export const loginUser=(user,context)=>dispatch=>
{
  // return(dispatch) => {
    var base_url =new Base()
    var LOGIN_URL="http://" + base_url.baseUrl + "login"
    try {
      axios
        .post(LOGIN_URL, user)
        .then((user)=> {
          if (user && user.phone !="") {
            context.setState({
              loading: false,
              VerifyPhoneScreen: "VerifyPhoneScreen"
            });
            context.props.navigation.navigate("VerifyPhoneScreen", user);
             AsyncStorage.setItem('user',user).then((d)=>
            {
           })
          
           dispatch({
            type:LOGIN,
            payload:user
          })
          } else {
            context.setState({ loading: false });
          }
        })
        .catch(function(error) {
          context.setState({ loading: false });
          Toast.show("يرجي التاكد من البيانات", Toast.LONG);
          console.log(error);
        });
    }catch (error) {
      Toast.show("", Toast.LONG);
      context.setState({ loading: false });
      console.error(error);
    }
  }
// }



export const VerificationCodeActivation=(v_object,context)=>dispatch=>{
  // return(dispatch) => {
    var base_url =new Base()
    var ACTIVATION_CODE_URL="http://" + base_url.baseUrl + "activate"
    try {
      axios
        .post(ACTIVATION_CODE_URL, v_object)
        .then((state)=> {
          // if (user && user.phone !="") {
          //   context.setState({
          //     loading: false,
          //     VerifyPhoneScreen: "VerifyPhoneScreen"
          //   });
          //   context.props.navigation.navigate("VerifyPhoneScreen", user);
          //    AsyncStorage.setItem('user',user).then((d)=>
          //   {
          //  })

          console.log(state.state.data)
          if(state.state.data)
          context.props.navigation.navigate("HomeScreen");

          dispatch({
            type:ACTIVATION_STATE,
            payload:state,
            context:context
          })
          
          // } else {
          //   context.setState({ loading: false });
          // }
        })
        .catch(function(error) {
          // context.setState({ loading: false });
          // Toast.show("يرجي التاكد من البيانات", Toast.LONG);
          console.log(error);
        });
    }catch (error) {
      // Toast.show("", Toast.LONG);
      // context.setState({ loading: false });
      console.error(error);
    }
  }
// }