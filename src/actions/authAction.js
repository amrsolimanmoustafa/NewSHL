import { FETCH_POSTS, LOGIN } from "../actions/types";
import Base from "../Base"
import axios from 'axios';
import { withNavigation } from "react-navigation";
import Toast from "react-native-simple-toast";

export const loginUser=(user,context)=>dispatch=>{

 var base_url =new Base()
var  LOGIN_URL="http://" + base_url.baseUrl + "login"
////////////////

// login(data,context){
  // var base =new Base()
  // var p;
// return p=new Promise((resolve,reject)=>{


    try {

      axios
        .post(LOGIN_URL, user)
        .then((user) =>{
          if (user && user.phone !="") {
            // console.log(user);
            context.setState({
              loading: false,
              VerifyPhoneScreen: "VerifyPhoneScreen"
            });
            context.props.navigation.navigate("VerifyPhoneScreen", user);
// resolve(user)
            //  navigate(self.state.VerifyPhoneScreen);

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



// resolve()
// reject()
// })
// }
////////////////



  // auth.login(user,context).
//   then(userloged=>
//     {
//       dispatch({
//     type:LOGIN,
//     payload:userloged
//   })


// })
}
