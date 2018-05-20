import { FETCH_POSTS, LOGIN } from "../actions/types";
import Base from "../Base"
import axios from 'axios';
import { withNavigation } from "react-navigation";
import Toast from "react-native-simple-toast";

export const refreshPlayerId=(user_id,token_id)=>dispatch=>{

 var base_url =new Base()
var  REFRESH_TOKEN="http://" + base_url.baseUrl + "updateusertoken/"+user_id
    try {
      axios
        .put(REFRESH_TOKEN,{'token_id':token_id})
        .then((res) =>{
console.log('token uploaded',res)

  //     dispatch({
  //   type:,
  //   payload:user
  // })
        })
        .catch(function(error) {
       
        });
    } catch (error) {
    
    }
}
export const loginUser=(user,context)=>dispatch=>{

  var base_url =new Base()
 var  LOGIN_URL="http://" + base_url.baseUrl + "login"
     try {
       axios
         .post(LOGIN_URL, user)
         .then((user) =>{
           if (user && user.phone !="") {
             context.setState({
               loading: false,
               VerifyPhoneScreen: "VerifyPhoneScreen"
             });
             context.props.navigation.navigate("VerifyPhoneScreen", user);
 
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
     } catch (error) {
       Toast.show("", Toast.LONG);
 
       context.setState({ loading: false });
       console.error(error);
     }
 }
 