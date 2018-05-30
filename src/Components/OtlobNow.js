import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import styles from './Styles/OtlobNowStyle'
import SearchButton from "./SearchButton"
import SideMapButtonsForOtlobNow from "./SideMapButtonsForOtlobNow"
import SelectedServices from "./SelectedServices"
// import PriceLinearGradient from "./PriceLinearGradient"
import {selectedServices,createorder} from "../actions/makeOrderAction"
import { connect } from 'react-redux'
import { withNavigation } from "react-navigation";
import { View, Text,TouchableOpacity } from 'react-native'
import stylesP from './Styles/PriceLinearGradientStyle'
import OrderService from '../service_api/OrderService'
import LinearGradient from "react-native-linear-gradient"
import { Toast } from 'native-base';
import {setHomeComponent} from "../actions/UpdateComponentsStateAction/updateComponentsStateAction"

 class OtlobNow extends Component {
  

  render () {
    const {
      auth,makeOrder
    }=this.props
    // console.log(this.props.makeOrder)
    return (
      <View style={styles.container}>
        <View  style={{
    height:"10%",
    width:"100%",
    // marginBottom:"5%",
    justifyContent:'center',
    marginLeft:20,
    position:'relative'

  }}/>
        <View style={styles.main}>
          <SelectedServices/>
          <SideMapButtonsForOtlobNow/>
        </View>
        {/* <PriceLinearGradient  
        text="تأكيد"/> */}
        <View style={stylesP.container}>
        <TouchableOpacity   
        onPress={()=>{

          let order = { services_id: makeOrder.services_id, sub_services_id: makeOrder.sub_services_id, user_id: auth.user_id, user_lat: this.props.common.lat, user_long: this.props.common.lat };
let orderService=new OrderService
orderService.createorder(order).then(res=>{
console.log(res)

},e=>{
console.log(e)
})
          console.log(order)

          console.log(auth.user_id)
alert('سوف يتم اخبارك في حال استلام احد مزودي الخدمة لدينا لطلبك')
this.props.setHomeComponent(1)
                  }} 
        style={stylesP.opacity}>
          <LinearGradient start={{ x: 0.0, y: 0.35 }} end={{ x: 0.9, y: 0.3 }} locations={[0, 0.5, 0.9]} colors={["rgb(57,180,76)", "#299386", "rgb(29,122,179)"]} style={stylesP.linearGradient}>
            <View style={stylesP.priceView}><Text style={styles.priceText}>{this.props.makeOrder.selectedServices[0].services_zone[0].price!=undefined?this.props.makeOrder.selectedServices[0].services_zone[0].price:''}ريال
            </Text></View>
            <Text style={stylesP.buttonText}>تأكيد</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
}
// export default class OtlobNow
const mapStateToProps = state => {
  return {
    // services: state.makeOrder.services.data,
    // service: state.makeOrder.service ,
    // common: state.common,
    // compState:state.compState,
    makeOrder:state.makeOrder,
    auth:state.auth,
        common: state.common,


  }
}
export default connect(mapStateToProps, {selectedServices,setHomeComponent,createorder}) (withNavigation(OtlobNow))