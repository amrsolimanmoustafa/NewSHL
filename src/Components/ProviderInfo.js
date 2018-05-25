import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableOpacity, ImageBackground, Image, Alert } from 'react-native'
import Communications from 'react-native-communications';
import { connect } from 'react-redux'
import {reverseCoordinatesToAdress,setCoordnates,setDriverCoordnates} from "../actions/CommonServicesActions/commonServicesActions"
import { withNavigation } from "react-navigation";
import Base from '../Base'

class ProviderInfo extends Component {
    cancleOrder = () => {
        Alert.alert(
            'تأكيد الغاء الطلب',
            'لا يمكن إعادة هذا الإجراء',
            [
                {text: 'تأكيد', onPress: () => console.log('OK Pressed')},
                {text: 'إلغاء', onPress: () => console.log('Cancle Pressed')},
            ]
        )
    }
  render () {
    console.log(this.props)
      const {info } = this.props
      const base = new Base()

    return (
        <ImageBackground source={ require('../assets/Assets/rectangle_108.png') }  style={{ position: 'absolute', bottom: 0, width: '100%', flex: 1, flexDirection: 'row', flexWrap: 'wrap', height: 150,  }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: 30, paddingRight: 20}} >
            <Image style={{ width: '100%', height: '100%', minWidth: 60, minHeight: 60, maxWidth: 60, maxHeight: 60, borderRadius: 
          30 }} source={{ uri:base.icon_url+info.personal_pic}} />
          </View>
          <View style={{ flex: 3, flexDirection: 'row', paddingRight: 20, }} >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }} >
              <TouchableOpacity onPress={() => Communications.phonecall(info.users['phone'], true)} style={{ backgroundColor: 'white', marginVertical: 10, marginHorizontal: 10, width: '100%', borderRadius: 10, shadowOffset: { width: 10, height: 10 },shadowColor: 'black', shadowOpacity: 1, elevation: 3, }} >
                <Text style={{ color: '#85B2CC', paddingVertical: 5, fontSize: 10, textAlign: 'center' }} >الاتصال بالسائق</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.cancleOrder} style={{ backgroundColor: 'white', marginVertical: 10, marginHorizontal: 10, width: '100%', borderRadius: 10, shadowOffset: { width: 10, height: 10 },shadowColor: 'black', shadowOpacity: 1, elevation: 3, }}>
                <Text style={{ color: '#85B2CC', paddingVertical: 5, fontSize: 10, textAlign: 'center' }} >الغاء الطلب</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', }} >
              <Text style={{ color: 'white', fontSize: 13, textAlign: 'center', fontWeight: '500' }} >{info.users['user_name']}</Text>
              <Text style={{ color: 'white', fontSize: 13, textAlign: 'center', fontWeight: '500', paddingVertical: 10 }} >{ info.vehicle_type }</Text>
              {/* <Text style={{ color: 'white', fontSize: 13, textAlign: 'center', fontWeight: '500' }} >{ mints } دقيقة للوصول</Text> */}
            </View>
          </View>
        </ImageBackground>
    );
}
}

const mapStateToProps = state => {
  return {
    // services: state.makeOrder.services.data,
    // service: state.makeOrder.service ,
    common: state.common,
    // compState:state.compState,
    // makeOrder:state.makeOrder,
    // user_id:state.auth.user_id

  }
}
export default connect(mapStateToProps,
  {
   setDriverCoordnates}) (withNavigation(ProviderInfo))