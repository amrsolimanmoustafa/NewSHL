import {
  GETSERVESIES,
  ADD_FAV_LOC,
  GET_FAV_LOCS,
  GETSELECTED_SERVICES,
  ORDER_OBJ,
  PROVIDER_INFO,
  RATE_PROVIDER,
  ORDER_ID,
  CANCEL_ORDER
} from "../actions/types";
import Base from "../Base"
import axios from 'axios';
import { Toast } from "native-base";

var VARS={'zone':''}
var base_url =new Base()

export const getServices=(zone,city)=>dispatch=>{
  VARS.zone=zone
  const GETALLSERVICES_URL="http://" + base_url.baseUrl + "allserivces/"+zone+"?lang="+base_url.lang
  try{
    console.log(GETALLSERVICES_URL)
    axios
      .get(GETALLSERVICES_URL)
      .then((services) =>{
        dispatch({
          type: GETSERVESIES,
          payload: services.data
        }) 
      }).catch(function(error) {
        console.log(error);
      });
  }catch(error) {
    console.error(error);
  }
}

export const createorder=(orderObj)=>dispatch=>{
  try {
          // axios
          //   .get(SEND_ORDER_REQUEST)
          //   .then((orderSent) =>{
        dispatch({
        type:ORDER_OBJ,
        payload:orderObj
      }) 
    // }).catch(function(error) {
    //           console.log(error);
    //         });
        } catch (error) {
          console.error(error);
        }
}

export const selectedServices=(selectedServices)=>dispatch=>{


  dispatch({
    type:GETSELECTED_SERVICES,
    payload:selectedServices
  })
}
export const orderLater=(scheduling_orders,user_id)=>dispatch=>{
  const ORDER_LATER_URL="http://" + base_url.baseUrl + "orderschedul"
  try {
    console.log(ORDER_LATER_URL,{'scheduling_orders':scheduling_orders,'user_id':user_id})
    //"2018-10-22" format
          axios
            .post(ORDER_LATER_URL,{'scheduling_orders':scheduling_orders,'user_id':user_id})
            .then((res) =>{
              alert(scheduling_orders+' سوف يتم تذكيرك في ')
              console.log(res)
            }).catch(function(error) {
              console.log(error);
            });
        } catch (error) {
          console.error(error);
        }
}
export const providerInfo=(providerInfo)=>dispatch=>{
  // const ORDER_LATER_URL="http://" + base_url.baseUrl + "orderschedul/"
  try {
    dispatch({
      type:PROVIDER_INFO,
      payload:providerInfo
    }) 
        } catch (error) {
          console.error(error);
        }
}

export const rateProvider=(rateObj,order_id)=>dispatch=>{
  const RATE_PROVIDER_URL="http://" + base_url.baseUrl +'clintfinishorder'+"/"+order_id
console.log(RATE_PROVIDER_URL)
console.log(rateObj)

try {
          // console.log(ORDER_LATER_URL,rateObj)
          //"2018-10-22" format
                axios
                  .put(RATE_PROVIDER_URL,rateObj)
                  .then((res) =>{
                    console.log(res)
                    Toast.show('تم التقييم بنجاح', Toast.LONG);

                   
                    dispatch({
                      type:ORDER_OBJ,
                      payload:res
                    }) 
                  }).catch(function(error) {
                    console.log(error);
                  });
              } catch (error) {
                console.error(error);
              }
}
export const setOrderID=(order_id)=>dispatch=>{
  dispatch({
    type:ORDER_ID,
    payload:order_id
  }) 
}
export const cancelOrder=(order_id)=>dispatch=>{
 const CANCEL_ORDER_URL="http://" + base_url.baseUrl +'clintcancelorder'+"/"+order_id
  // console.log(RATE_PROVIDER_URL)
  
  try {
            // console.log(ORDER_LATER_URL,rateObj)
            //"2018-10-22" format
                  axios
                    .put(CANCEL_ORDER_URL)
                    .then((res) =>{
                      console.log(res)
                      // Toast.show('تم الغاء الطلب', Toast.LONG);
  
                     
                      dispatch({
                        type:CANCEL_ORDER,
                        payload:res
                      }) 
                    }).catch(function(error) {
                      console.log(error);
                    });
                } catch (error) {
                  console.error(error);
                }
}
export const favlocationlist=(user_id)=>dispatch=>{
      return new Promise((resolve, reject)=>{

      

  const GET_FAV_LOCS_URL="http://" + base_url.baseUrl +'favlocationlist'+"/"+user_id
   console.log(GET_FAV_LOCS_URL)
   try {
            
                   axios
                     .get(GET_FAV_LOCS_URL)
                     .then((res) =>{
                       console.log(res)
   
                      
                       dispatch({
                         type:GET_FAV_LOCS,
                         payload:res
                       }) 
                       resolve()

                     }).catch(function(error) {
                       console.log(error);
                     });
                 } catch (error) {
                   console.error(error);
                 }
                })
 }
 
 export const addToFavLocs=(locObj)=>dispatch=>{
  const ADD_FAV_LOC_URL="http://" + base_url.baseUrl +'storefavlocation'
   console.log(ADD_FAV_LOC_URL)
   try {
            
                   axios
                     .post(ADD_FAV_LOC_URL,locObj)
                     .then((res) =>{
                       console.log(res)
   
                      
                       dispatch({
                         type:ADD_FAV_LOC_URL,
                         payload:res
                       }) 
                     }).catch(function(error) {
                       console.log(error);
                     });
                 } catch (error) {
                   console.error(error);
                 }
 }





// export const getLowRateReason=()=>dispatch=>{
//   const RATE_PROVIDER_URL="http://" + base_url.baseUrl +'getclintcancelreasone?lang=1'

//         try {
//           // console.log(ORDER_LATER_URL,rateObj)
//           //"2018-10-22" format

//                 axios
//                   .put(RATE_PROVIDER_URL+"/"+order_id,rateObj)
//                   .then((res) =>{
//                     console.log(res)
//                     Toast.show({
//                       text: 'تم التقييم بنجاح',
//                       buttonText: 'تم'
//                     })
//                     dispatch({
//                       type:ORDER_OBJ,
//                       payload:res
//                     }) 
//                   }).catch(function(error) {
//                     console.log(error);
//                   });
//               } catch (error) {
//                 console.error(error);
//               }
// }