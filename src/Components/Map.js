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
import {reverseCoordinatesToAdress} from "../actions/CommonServicesActions/commonServicesActions"
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
var { RNLocation: Location } = require('NativeModules');

class Map extends Component {
 //1: <OtlobMain/> 
  state= {lat:0,lng:0,currentComponent:2,showMainButtons:true,page:0}

  constructor(props) {
    super(props);
    this.state = {
      showMainButtons:true
    }
 
  }
  componentWillMount() {
    this.props.getServices('Mohammed Farid')
    const myModuleEvt = new NativeEventEmitter(Location)
    myModuleEvt.removeListener('locationUpdated')

  }

  componentDidMount() {
    this.props.setHomeComponent(1)


    // console.log(this.props)
    this.currentLocationSetToOrder()
  }
  currentLocationSetToOrder(){
      navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        this.setState({lat:position.coords.latitude,lng:position.coords.longitude})
        let orderService=new OrderService
        orderService.setOrderLat(this.state.lat)
        orderService.setOrderLng(this.state.lng)
        ////***/////  */
    this.props.createorder({user_lat:orderService.getOrderLat(),user_long:orderService.getOrderLng()})

    console.log(orderService.getOrderLat())
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
 }
  orderButtons_View(){
    // if(this.state.showMainButtons){
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
    console.log('comp no . ::',this.props.compState.__CurrentComponent)
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
    console.log('lat ',this.props.common.lat)
    return <View style={{ flex: 1, position: "relative", zIndex: 0 }}>
        <View style={{ width: "100%",position:'absolute',zIndex:3}}>
          <GooglePlacesInput  />
        </View>

        <MapView style={{ flex: 1, borderRadius: 10, borderWidth: 2, zIndex: 0, borderColor: "#fff" }}
         region={{ latitude: this.state.lat ? this.state.lat : 0, 
         longitude: this.state.lng ? this.state.lng : 0, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} 
         followsUserLocation={true} >
          <MapView.Marker.Animated 
                    coordinate={
                      new MapView.AnimatedRegion({
                        latitude: this.state.lat? this.state.lat : 6.2672295570373535,
                        longitude:this.state.lng? this.state.lng : 31.229478498675235,
                      })
                    }
                />
       </MapView>
        {this.props.compState.__CurrentComponent == 2 ? <OtlobNow  /> : <View style={{ width: 0, height: 0 }} />}

        {/* Right side buttons */}
        <View style={{ position: "absolute", right: 16, top: 105 }}>
          <TouchableOpacity onPress={() => {}} style={styles.touchable}>
            <Image source={Images.pinIcon} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={[styles.touchable, { marginTop: 16 }]}>
            <Image source={Images.sataliteIcon} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={[styles.touchable, { marginTop: 16 }]}>
            <Image source={Images.kabbaIcon} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={[styles.touchable, { marginTop: 16 }]}>
            <Image source={Images.locatiOnMapIcon} style={styles.image} />
          </TouchableOpacity>
        </View>

        {service.length > 0 && this.props.compState.__CurrentComponent == 1 ? <View style={{ position: "absolute", left: 0, bottom: 10, right: 0 }}>
            {/* Sub services */}
            {this.state.page ? <View style={{ height: 110,marginTop:10, padding: 10, backgroundColor: "rgba(255,255,255,0.8)"}}>
                <CarouselPager ref={ref => (this.carousel = ref)} initialPage={0} pageStyle={{ height: 110, alignItems: "center", justifyContent: "center" }} onPageChange={selectedService => {
                    // this.setState({page:page,MainButtons:true})
                    //dispach selected services
                    selectedServices([
                      services[this.state.page].sup_serivces_data[
                        selectedService
                      ],
                      services[this.state.page]
                    ]);
                    // console.log('services obj ::: ',{services_id:services[this.state.page]['services_id']
                    // ,sub_services_id:services[this.state.page].sup_serivces_data[selectedService]['sub_services_id']})
                    createorder({
                      services_id: services[this.state.page]["services_id"],
                      sub_services_id:
                        services[this.state.page].sup_serivces_data[
                          selectedService
                        ]["sub_services_id"]
                    });
                    console.log(this.props);
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
//   locationUpdated() {
//     if (Platform.OS=='ios'){
//         Location.requestAlwaysAuthorization();
//         Location.setAllowsBackgroundLocationUpdates(true);
//         Location.setDistanceFilter(50);
//         Location.requestWhenInUseAuthorization();
//     }else{
//         Location.requestWhenInUseAuthorization();
//     }
//     Location.startUpdatingLocation();
//     const myModuleEvt = new NativeEventEmitter(Location)
//     var subscription = myModuleEvt.addListener(
//         'locationUpdated',
//         (position) => {


// //update order location
// this.setState({lat:position.coords.latitude,lng:position.coords.longitude})
// let orderService=new OrderService
// orderService.setOrderLat(this.state.lat)
// orderService.setOrderLng(this.state.lng)
// ////***/////  */
// this.props.createorder({user_lat:orderService.getOrderLat(),user_long:orderService.getOrderLng()})

// console.log(orderService.getOrderLat())

//           // console.log(location)
//           // var position = {
//           //     lat: (Platform.OS=='ios')?location.coords.latitude : location.latitude,
//           //     long: (Platform.OS=='ios')?location.coords.longitude : location.longitude
//           // };
//           // this.setState({position: position})
//           // this.props.updateProvidorLocation(position)
//         }
//     );
//   }
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
    reverseCoordinatesToAdress,
    createorder
  }) (withNavigation(Map))