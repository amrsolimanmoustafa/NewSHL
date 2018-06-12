import React, { Component } from 'react'
import styles from './Styles/OtlobNowStyle'
import SideMapButtonsForOtlobNow from "./SideMapButtonsForOtlobNow"
import SelectedServices from "./SelectedServices"
import {selectedServices,createorder} from "../actions/makeOrderAction"
import { connect } from 'react-redux'
import { withNavigation } from "react-navigation";
import { View, Text,TouchableOpacity } from 'react-native'
import stylesP from './Styles/PriceLinearGradientStyle'
import OrderService from '../service_api/OrderService'
import LinearGradient from "react-native-linear-gradient"
import {setHomeComponent} from "../actions/UpdateComponentsStateAction/updateComponentsStateAction"
import strings from '../strings'

class OtlobNow extends Component {  
  render () {
    const {
      auth,
      makeOrder
    } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <SelectedServices/>
          <SideMapButtonsForOtlobNow/>
        </View>
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
            style={stylesP.opacity}
          >
            <LinearGradient
              colors={["rgb(57,180,76)", "#299386", "rgb(29,122,179)"]}
              style={stylesP.linearGradient}
            >
              <View style={stylesP.priceView}>
                <Text style={styles.priceText}>
                  {makeOrder.selectedServices[0].services_zone[0].price?
                    makeOrder.selectedServices[0].services_zone[0].price : ''
                  }
                    ريال
                </Text>
              </View>
              <Text style={stylesP.buttonText}>
                {strings.confirm}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    makeOrder: state.makeOrder,
    auth: state.auth,
    common: state.common,
  }
}

export default connect(mapStateToProps, {
  selectedServices,
  setHomeComponent,
  createorder
}) (withNavigation(OtlobNow))