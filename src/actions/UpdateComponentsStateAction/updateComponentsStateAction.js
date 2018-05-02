import {  COMPONENT_ENTER } from  '../types'


export const setHomeComponent=(component)=>dispatch=>{

//  var base_url =new Base()
// var  GETALLSERVICES_URL="http://" + base_url.baseUrl + "allserivces/"+zone+"?lang="+base_url.lang

    try {    
    dispatch({
    type:COMPONENT_ENTER,
    payload:component
  }) 

    } catch (error) {
      console.error(error);
    }

}
