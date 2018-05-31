import { GET_NOTIFICATIONS,GET_COSTS,TERMS,ABOUT_APP } from "../../actions/types";
import Base from "../../Base"
import axios from 'axios';
// import Toast from "react-native-simple-toast";
// import { AsyncStorage } from 'react-native'
// import { NavigationActions } from 'react-navigation';

export const getNotifications=(user_id)=>dispatch=>{
  var base_url =new Base()
  var GET_NOTIFICATIONS_URL="http://" + base_url.baseUrl + "clintnotification/"+user_id+"?lang="+base_url.lang
  
  try {
    axios
      .get(GET_NOTIFICATIONS_URL)
      .then((res) =>{
        console.log('token uploaded',res)
        dispatch({
          type:GET_NOTIFICATIONS,
          payload:res
        })
      })
      .catch(function(error) {
      
      });
  }catch (error) {
  
  }
}
export const servicesCost=()=>dispatch=>{
    var base_url =new Base()
    var GET_COSTS_URL="http://" + base_url.baseUrl + "servicesprice?lang="+base_url.lang
    try {
      axios
        .get(GET_COSTS_URL)
        .then((res) =>{
          console.log('token uploaded',res)
          dispatch({
            type:GET_COSTS,
            payload:res
          })
        })
        .catch(function(error) {
        
        });
    }catch (error) {
    
    }
  }
  export const aboutApp=()=>dispatch=>{
    var base_url =new Base()
    var ABOUT_APP_URL="http://" + base_url.baseUrl + "aboutapp?lang="+base_url.lang
    try {
      axios
        .get(ABOUT_APP_URL)
        .then((res) =>{
          dispatch({
            type:ABOUT_APP_URL,
            payload:res
          })
        })
        .catch(function(error) {
        
        });
    }catch (error) {
    
    }
  }
  export const termsAndConditions=()=>dispatch=>{
    var base_url =new Base()
    var TERMS_URL="http://" + base_url.baseUrl + "termsandconditions?lang="+base_url.lang
    console.log('TERMS_URL',TERMS_URL)


    try {
      axios
        .get(TERMS_URL)
        .then((res) =>{
          console.log('token uploaded',res)
          dispatch({
            type:TERMS,
            payload:res
          })
        })
        .catch(function(error) {
        
        });
    }catch (error) {
    
    }
  }
  
// export const loginUser = (loginUser,context) => {
//   return(dispatch) => {
//     var base_url =new Base()
//     var LOGIN_URL="http://" + base_url.baseUrl + "login"
//     try{
//       axios
//         .post(LOGIN_URL, loginUser)
//         .then((response)=> {
//           let user = response.data
//           console.log(user)
//           console.log(user.phone)
//           if (user && user.phone != '') {
//             dispatch({
//               type: LOGIN,
//               payload: user
//             })
//             context.setState({
//               loading: false,
//               VerifyPhoneScreen: "VerifyPhoneScreen"
//             });
//             context.props.navigation.navigate("VerifyPhoneScreen", user)
//           }else{
//             context.setState({ loading: false });
//           }
//         })
//         .catch(function(error) {
//           context.setState({ loading: false });
//           Toast.show("يرجي التاكد من البيانات", Toast.LONG);
//           console.log(error);
//         });
//     }catch (error) {
//       Toast.show("يرجي التاكد من البيانات", Toast.LONG);
//       context.setState({ loading: false });
//       console.error(error);
//     }
//   }
// }



// export const VerificationCodeActivation = (v_object,context) => {
//   return(dispatch) => {
//     var base_url =new Base()
//     var ACTIVATION_CODE_URL="http://" + base_url.baseUrl + "activate"
//     try {
//       axios
//         .post(ACTIVATION_CODE_URL, v_object)
//         .then(async(response)=> {
//           console.log(response)
//           /*{
//             accommodation_type: null,
//             activate: "1",
//             city_id: null,
//             created_at: "2018-05-21 15:50:38",
//             email: null,
//             lang_id: "ar",
//             phone: "1",
//             profile_pic: null,
//             token_id: "5508ef1c-7ea1-48c8-89a1-b668f83d6bd1",
//             type: null,
//             updated_at: "2018-05-30 14:38:26",
//             user_id: 40,
//             user_name: null,
//             v_code: "16421",
//             zone_id: null
//           }*/
//           if(response.status == 200 && response.data){
//             const user = response.data
//             dispatch({
//               type: ACTIVATION_STATE,
//               payload: response,
//               context: context
//             })
//             await AsyncStorage.multiSet([
//               ['accommodation_type', user.accommodation_type? user.accommodation_type : ''],
//               ['activate', user.activate? user.activate : ''],
//               ['city_id', user.city_id? user.city_id : ''],
//               ['email', user.email? user.email : ''],
//               ['lang_id', user.lang_id? user.lang_id : 'ar'],
//               ['phone', user.phone],
//               ['profile_pic', user.profile_pic? user.profile_pic : ''],
//               ['token_id', user.token_id],
//               ['type', user.type? user.type : ''],
//               ['user_id', user.user_id.toString()],
//               ['user_name', user.user_name? user.user_name : ''],
//               ['zone_id', user.zone_id? user.zone_id : ''],
//             ])
//             const resetAction = NavigationActions.reset({
//               index: 0,
//               actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
//             });
//             context.props.navigation.dispatch(resetAction);

//           }
//         })
//         .catch(function(error) {
//           // context.setState({ loading: false });
//           // Toast.show("يرجي التاكد من البيانات", Toast.LONG);
//           console.log(error);
//         });
//     }catch (error) {
//       // Toast.show("", Toast.LONG);
//       // context.setState({ loading: false });
//       console.error(error);
//     }
//   }
// }