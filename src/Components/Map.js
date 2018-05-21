import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,  Platform,
  StyleSheet,  DeviceEventEmitter,
  NativeEventEmitter,
  Dimensions
} from 'react-native'
import MapView from 'react-native-maps';
import CarouselPager from 'react-native-carousel-pager';
import { Icon, Button } from 'native-base';
import {Images} from '../Themes';
import SideMapButtons from "./SideMapButtons"
import MainButtons from "./MainButtons"
import OtlobMain from "./OtlobMain"
import OtlobNow from "./OtlobNow"
import {reverseCoordinatesToAdress,setCoordnates,setDriverCoordnates} from "../actions/CommonServicesActions/commonServicesActions"
import { withNavigation } from "react-navigation";
import { connect } from 'react-redux'
import {setHomeComponent} from "../actions/UpdateComponentsStateAction/updateComponentsStateAction"
import {getServices,selectedServices,createorder} from "../actions/makeOrderAction"
import Base from '../Base'
import LinearGradientForMap from "./LinearGradientForMap"
import style from './Styles/MainButtonsStyle'
import OrderService from '../service_api/OrderService'
import GooglePlacesInput from "./GooglePlacesInput";
const {width,height} = Dimensions.get('window')
// var { RNLocation: Location } = require('NativeModules');
import * as firebase from "firebase";
// import * as GeoFire from "geofire";
GeoFire = require('geofire');
import {refreshPlayerId} from "../../src/actions/authAction"

import MapViewDirections from 'react-native-maps-directions';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

const GOOGLE_MAPS_APIKEY = 'AIzaSyAMVAuZSku-7gAMuWMFEj1kdjNtP2TLFOg';
const self=[];

class Map extends Component {
 //1: <OtlobMain/> 
  state= { lat:0,lng:0,currentComponent:2,showMainButtons:true,page:0,mapState:'standard',servicesSliderState:true}
  //  destination = {latitude:31.1064717, longitude:29.8279375};

  origin = {latitude:31.2064717, longitude:29.9279375};

  constructor(props) {
    console.clear
    // console.log(this.state.origin)
    // firebase.database().ref('orders').child('-LCi1Znmu8sDQ96pKVX3').on('').then(res=>{
      // console.log(res)
    // }).catch(e=>{
// consol.log(e)
    // })
    super(props);
    this.state = {
      showMainButtons:true
    }
  }
  
///////////////////////
notificationHandler(self){
  // try{
  OneSignal.init('a3551d54-e1bc-4f12-874c-7f6cb7982f95',  {kOSSettingsKeyAutoPrompt : true});
  OneSignal.addEventListener('received', this.onReceived);
  OneSignal.addEventListener('opened', this.onOpened);
  OneSignal.addEventListener('ids', this.onIds);
}
componentWillUnmount() {
  OneSignal.removeEventListener('received', this.onReceived);
  OneSignal.removeEventListener('opened', this.onOpened);
  OneSignal.removeEventListener('ids', this.onIds);
  navigator.geolocation.clearWatch(this.watchId);

}

onReceived(notification) {
  console.log("Notification received: ", notification);
}

onOpened(openResult) {
console.log('Message: ', openResult.notification.payload.body);
console.log('Data: ', openResult.notification.payload.additionalData);
console.log('isActive: ', openResult.notification.isAppInFocus);
console.log('openResult: ', openResult);
}

onIds(device) {
self.props.refreshPlayerId(self.props.user_id,device['userId'])
}
//////////////////////
 componentWillMount() {
  self=this
  this.notificationHandler(this)

  this.notificationHandler(self)
  this.props.setHomeComponent(1)

  // console.log('lat ',this.props.common)
//should be reversed in order to get services  
  this.props.reverseCoordinatesToAdress(this.props.common.lat,this.props.common.lng)

  this.props.getServices('Mohammed Farid')


// this.props.reverseCoordinatesToAdress()

// console.log('lat ',this.props.common)
 
  }
trackOrder(order_id,self){
  try{

  var firebaseRef = firebase.database().ref('orders');
    firebaseRef.child(order_id).on('value',(e)=>{

   
var geoFire = new GeoFire(firebaseRef);
  geoFire.get(order_id).then((location)=> {
    if (location === null) {
// self.setState({destinationLatitude:location[0],destinationLongitude:location[1]})
self.props.setDriverCoordnates(location[0],location[1])
      // console.log("Provided key is not in GeoFire",self.props.common.driverLat);
    }
    else {
      self.props.setDriverCoordnates(location[0],location[1])

      // console.log("Provided key is not in GeoFire",self.props.common.driverLat);


    }
  }, (error)=> {
    console.log("Error: " + error);
  }); })

  }catch(e){}
}
  
  
  orderButtons_View(){
      if(true){

      return (
        
          <View style={{ backgroundColor: 'rgba(255,255,255,0.8)',justifyContent:"center",flexDirection:"row",position:"relative",zIndex:0,flex:1}}>
      <View style={style.opacityView}>
        <TouchableOpacity style={style.opacityWight}>
          <Text style={style.opacityWightText}>
            اطلب لاحقاً
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.opacityView2}>
        <LinearGradientForMap text="اطلب الان" style={style.opacity}  press={() => {
//dispach 2nd component in map view
this.props.setHomeComponent(2)

        }}/>
      </View>
    </View>
      )
    }
  }
  components=()=>  {
    // console.log('comp no . ::',this.props.compState.__CurrentComponent)
    switch (this.props.compState.__CurrentComponent){
      case 1:
        return (<OtlobMain/>)
      case 2:
        return (<OtlobNow/>)
      case 3:
        return ( <FavoritePlaces/>)
      default: return
    }
  }

  render () {
    const {
      service,selectedServices,services,createorder
    } =  this.props
  
    const base = new Base()
    // console.log('lat ',this.props.common.lat)
    return <View style={{ flex: 1, position: "relative", zIndex: 0 }}>
        <View style={{ width: "100%",position:'absolute',zIndex:3}}>
          <GooglePlacesInput  />
        </View>

        <MapView
//         onMarkerDragEnd={(marker)=>{
// console.log(marker)

//         }}
        
//         onRegionChange={()=>{
//           // console.log('r')
//           this.setState({servicesSliderState:false})
// break
//         }}
onPress={()=>{
if(this.state.servicesSliderState==true){
  this.setState({servicesSliderState:false})
}else{ this.setState({servicesSliderState:true})}
}}
//         onRegionChangeComplete={()=>{
//           console.log('r2')
//         //  return this.setState({servicesSliderState:true})
// // if(this.state.servicesSliderState==true){
//   // this.setState({servicesSliderState:false})
// // }else{ this.setState({servicesSliderState:true})}
//         }}
        mapType={this.state.mapState}
        style={{ flex: 1, borderRadius: 10, borderWidth: 2, zIndex: 0, borderColor: "#fff" }}
         region={{
             latitude:this.props.common.lat? this.props.common.lat : 6.2672295570373535,
          longitude:this.props.common.lng?this.props.common.lng : 31.229478498675235
          , latitudeDelta: 0.0922
          , longitudeDelta: 0.0421 
        }} 
        //  followsUserLocation={false} 
         >
          <MapView.Marker.Animated
            draggable
                    coordinate={
                      new MapView.AnimatedRegion({
                        latitude:this.props.common.lat? this.props.common.lat : 6.2672295570373535,
                        longitude:this.props.common.lng?this.props.common.lng : 31.229478498675235
                      })
                    }
                    onDragStart={()=>{
                      this.setState({servicesSliderState:false})

                    }}
                    onDragEnd={(e) =>{
                    this.props.setCoordnates(e.nativeEvent.coordinate.latitude,e.nativeEvent.coordinate.longitude)
                    this.setState({servicesSliderState:true})
                    }}
                />
                {this.props.common.driverLat?
                    <MapViewDirections
    origin={{latitude:this.props.common.lat,longitude:this.props.common.lng}}
      destination={{latitude:this.props.common.driverLat, longitude:this.props.common.driverLng}}

    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={3}
    strokeColor="hotpink"
  />:null}
       </MapView> 
        {this.props.compState.__CurrentComponent == 2 ? <OtlobNow  /> : <View style={{ width: 0, height: 0 }} />}

        {/* Right side buttons */}
        <View style={{ position: "absolute", right: 16, top: 105 }}>
          <TouchableOpacity onPress={() =>{}} style={styles.touchable}>
            <Image source={Images.pinIcon} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
if(this.state.mapState=="satellite"){
  this.setState({mapState:"standard"})

}else{
  this.setState({mapState:"satellite"})

}

          }} style={[styles.touchable, { marginTop: 16 }]}>
            <Image source={Images.sataliteIcon} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={[styles.touchable, { marginTop: 16 }]}>
            <Image source={Images.kabbaIcon} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={[styles.touchable, { marginTop: 16 }]}>
            <Image source={Images.locatiOnMapIcon} style={styles.image} />
          </TouchableOpacity>
        </View>

        {service.length > 0 && this.props.compState.__CurrentComponent == 1 && this.state.servicesSliderState==true? 
        <View style={{ position: "absolute", left: 0, bottom: 10, right: 0 }}>
            {/* Sub services */}
            {this.state.page ? <View style={{ height: 110,marginTop:10, padding: 10, backgroundColor: "rgba(255,255,255,0.8)"}}>
                <CarouselPager ref={ref => (this.carousel = ref)} initialPage={0} pageStyle={{ height: 110, alignItems: "center", justifyContent: "center" }} onPageChange={selectedService => {
               
                    selectedServices([
                      services[this.state.page].sup_serivces_data[
                        selectedService
                      ],
                      services[this.state.page]
                    ]);
                 
                    createorder({
                      services_id: services[this.state.page]["services_id"],
                      sub_services_id:
                        services[this.state.page].sup_serivces_data[
                          selectedService
                        ]["sub_services_id"]
                    });
                    // console.log(this.props);
                    this.setState({ showMainButtons: true });

                    ////////////////////////////
                  }}>
                  {service[parseInt(this.state.page)].sup_serivces_data.map(
                    subService => (
                      <TouchableOpacity
                        key={subService.services_id}
                        style={{
                          height: 110,                            
                          marginTop: 20,
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <Image
                          source={{ uri: base.icon_url + subService.icone }}
                          style={{
                            width: 70,
                            height: 70,
                            borderRadius: 35,
                            resizeMode: "contain"
                          }}
                        />
                        <Text
                          style={{
                            marginTop: 5,
                            fontSize: 12,
                            color: "rgb(30,123,177)"
                          }}
                        >
                          {subService.services_name_ar}
                        </Text>
                      </TouchableOpacity>
                    )
                  )}
                </CarouselPager>
              </View> : <View style={{ width: 0, height: 0 }} />}
            {/* Main services */}
            <View style={{ height: 130, padding: 10, backgroundColor: "rgba(255,255,255,0.8)", justifyContent: "center" }}>
              <CarouselPager ref={ref => (this.carousel = ref)} initialPage={0} pageStyle={{height: 130, alignItems: "center", justifyContent: "center" }} onPageChange={page => {
                  {
                    selectedServices([
                      services[page].sup_serivces_data[0],
                      services[page]
                    ]);
                  }

                  createorder({
                    services_id: services[page]["services_id"],
                    sub_services_id:
                      services[page].sup_serivces_data[0]["sub_services_id"]
                  });

                  this.setState({ page: page.toString() });
                }}>
                {service.map(mainService => (
                  <TouchableOpacity
                    key={mainService.services_id}
                    style={{marginBottom:40,
                      height: 130,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      source={{ uri: base.icon_url + mainService.icone }}
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 35,
                        resizeMode: "contain"
                      }}
                    />
                    <Text
                      style={{
                        marginTop: 5,
                        fontSize: 12,
                        color: "rgb(30,123,177)"
                      }}
                    >
                      {mainService.services_name_ar}
                    </Text>
                  </TouchableOpacity>
                ))}
              </CarouselPager>
            </View>
            {this.orderButtons_View()}
          </View> : <View style={{ width: 0, height: 0 }} />}
      </View>;
  }

}

const styles = StyleSheet.create({
  touchable: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {

  }
})

const mapStateToProps = state => {
  return {
    services: state.makeOrder.services.data,
    service: state.makeOrder.service ,
    common: state.common,
    compState:state.compState,
    makeOrder:state.makeOrder
  }
}
 export default connect(mapStateToProps,
  {
    getServices,
    setHomeComponent,
    selectedServices,
    reverseCoordinatesToAdress,setCoordnates,setDriverCoordnates,
    createorder,refreshPlayerId
  }) (withNavigation(Map))