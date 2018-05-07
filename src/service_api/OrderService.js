import Base from "../Base"
import axios from 'axios';
var base_url =new Base()

var SEND_ORDER_REQUEST="http://" + base_url.baseUrl + "createorder"



 const orderLat=''
 const orderLng=''

export default class OrderService {
  constructor() {

  }
  setOrderLat=(lat)=>{
    orderLat=lat
  }

  setOrderLng=(lng)=>{
    orderLng=lng
  }
  getOrderLat=()=>{
    return orderLat
  }
    getOrderLng=()=>{
    return orderLng
  }
  

  createorder=(order)=>{
    let promise =new Promise((resolve,reject)=>{
        console.log(SEND_ORDER_REQUEST)
        try {
        axios
          .post(SEND_ORDER_REQUEST,order)
          .then((orderSent) =>{
  resolve(orderSent)
  }).catch(function(error) {
            console.log(error);
            reject(error)
          });
      } catch (error) {
        console.error(error);
      }
    })
    return promise;
   
     
  }
}


