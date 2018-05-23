import {  GETSERVESIES ,GETSELECTED_SERVICES,ORDER_OBJ} from "../actions/types";
import Base from "../Base"
import axios from 'axios';
import { Toast } from "native-base";


var VARS={'zone':''}
var base_url =new Base()
// var SEND_ORDER_REQUEST="http://" + base_url.baseUrl + "createorder"

export const getServices=(zone)=>dispatch=>{
  VARS.zone=zone
  const GETALLSERVICES_URL="http://" + base_url.baseUrl + "allserivces/"+zone+"?lang="+base_url.lang

    try {
console.log(GETALLSERVICES_URL)
      axios
        .get(GETALLSERVICES_URL)
        .then((services) =>{
    dispatch({
    type:GETSERVESIES,
    payload:services
  }) 
}).catch(function(error) {
          console.log(error);
        });
    } catch (error) {
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
export const orderLater=(scheduling_orders)=>dispatch=>{
  const ORDER_LATER_URL="http://" + base_url.baseUrl + "orderschedul"
  try {
    console.log(ORDER_LATER_URL,{scheduling_orders:scheduling_orders})
    //"2018-10-22" format
          axios
            .post(ORDER_LATER_URL,{scheduling_orders:scheduling_orders})
            .then((res) =>{
              console.log(res)
            }).catch(function(error) {
              console.log(error);
            });
        } catch (error) {
          console.error(error);
        }
}