import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  DeviceEventEmitter,
  NativeEventEmitter,
  Dimensions,
  FlatList,
  ImageBackground, AsyncStorage
} from 'react-native'
import MapView from 'react-native-maps';
import CarouselPager from 'react-native-carousel-pager';
import { Icon, Button } from 'native-base';
import { Images } from '../Themes';
import SideMapButtons from "./SideMapButtons"
import OtlobNow from "./OtlobNow"
import { reverseCoordinatesToAdress, setCoordnates, setDriverCoordnates } from "../actions/CommonServicesActions/commonServicesActions"
import { withNavigation } from "react-navigation";
import { connect } from 'react-redux'
import { setHomeComponent } from "../actions/UpdateComponentsStateAction/updateComponentsStateAction"
import { getServices, selectedServices, favlocationlist, createorder, orderLater, providerInfo, setOrderID } from "../actions/makeOrderAction"
import ProviderInfo from '../Components/ProviderInfo'
import Base from '../Base'
import LinearGradientForMap from "./LinearGradientForMap"
import LinearGradient from 'react-native-linear-gradient';
import OrderService from '../service_api/OrderService'
import GooglePlacesInput from "./GooglePlacesInput";
const { width, height } = Dimensions.get('window')
import * as firebase from "firebase";
let GeoFire = require('geofire');
import { refreshPlayerId } from "../../src/actions/authAction"
import OneSignal from 'react-native-onesignal';
import Carousel from 'react-native-snap-carousel';
import { Calendar } from 'react-native-calendars'
import style from './Styles/MainButtonsStyle'
import strings from '../strings'
import { loginUser } from "../../src/actions/authAction"
let self;
class Map extends Component {
  origin = { latitude: 31.2064717, longitude: 29.9279375 };
  constructor(props) {
    super(props);
    this.state = {
      currentMainCategory: null,
      showMainButtons: true,
      order_id: '',
      lat: 0,
      lng: 0,
      currentComponent: 2,
      showMainButtons: true,
      page: 0,
      provider_info: [],
      mapState: 'standard',
      servicesSliderState: true,
      calenderShow: false,
    }
  }

  async componentWillMount() {
    // this.props.favlocationlist(this.props.user_id)
    self = this
    await AsyncStorage.getItem('phone').then((phone) => {
      console.log('phone', phone)
      self.props.loginUser({ 'phone': phone, 'token_id': '', lang: 'ar' }, '')
    })
    OneSignal.setLogLevel(6, 0)
    OneSignal.addEventListener('received', self.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.init('a3551d54-e1bc-4f12-874c-7f6cb7982f95', { kOSSettingsKeyAutoPrompt: true });
    this.props.setHomeComponent(1)
    OneSignal.configure()
    // this.props.reverseCoordinatesToAdress(this.props.common.lat,this.props.common.lng)
    // this.props.getServices('Mohammed Farid')
    // this.props.reverseCoordinatesToAdress()
    // console.log('lat ',this.props.common)
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = (notification) => {
    try {
      console.log("Notification received: ", notification.payload);
      if (notification.payload.additionalData.data[1].type == 'order_accepted') {
        self.setState({ provider_info: notification.payload.additionalData.data[0] })
        self.props.providerInfo(notification.payload.additionalData.data[0])
        self.trackOrder(notification.payload.additionalData.data[2].order_id, self)
        self.props.setOrderID(notification.payload.additionalData.data[2].order_id)
        self.setState({ order_id: notification.payload.additionalData.data[2].order_id })
      } else if (notification.payload.additionalData.data[1].type == 'order_finish') {
        console.log("Notification order ended succesfuly: ", notification.payload);
        // self.props.setHomeComponent(0)
        var firebaseRef = firebase.database().ref('orders');
        firebaseRef.child(self.state.order_id).off()
        self.props.setDriverCoordnates('', '')
      } else if (notification.payload.additionalData.data[1].type == 'order_cancel') {
        console.log("Notification order ended succesfuly: ", notification.payload);
        // self.props.setHomeComponent(0)
        var firebaseRef = firebase.database().ref('orders');
        firebaseRef.child(self.state.order_id).off()
        self.props.setDriverCoordnates('', '')
      } else if (notification.payload.additionalData.data[1].type == 'clint_notification') {
        self.props.navigation.navigate('Notifications')
      }
    } catch (e) {
      console.log(e)
    }
  }

  onOpened = (openResult) => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData.data[1].type == 'order_finish');
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
    if (openResult.notification.payload.additionalData.data[1].type == 'order_finish') {
      // console.log("Notification order ended succesfuly: ",notification.payload);
      self.props.popup.show()
    }
  }

  onIds = (device) => {
    console.log('Device info: ', device);
    self.props.refreshPlayerId(self.props.user_id, device['userId'])
    OneSignal.addEventListener('received', self.onReceived);
    OneSignal.addEventListener('opened', self.onOpened);
  }

  trackOrder(order_id, self) {
    this.props.setHomeComponent(1)
    try {
      var firebaseRef = firebase.database().ref('orders');
      firebaseRef.child(order_id).on('value', (e) => {
        var geoFire = new GeoFire(firebaseRef);
        var geoQuery = geoFire.query({
          center: [10.38, 2.41],
          radius: 10.5
        });

        var radius = geoQuery.radius();  // radius === 10.5
        geoFire.get(order_id).then((location) => {
          if (location === null) {

          }
          else {
            self.props.setDriverCoordnates(location[0], location[1])
            console.log("Provided key is not in GeoFire", self.props.common.driverLat);
          }
        }, (error) => {
          console.log("Error: " + error);
        });
      })
    } catch (e) { }
  }

  orderButtons_View() {
    if (true) {
      return (
        <View style={{ justifyContent: "center", flexDirection: "row", position: "relative", zIndex: 0, flex: 1 }}>
          <View style={style.opacityView}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ calenderShow: true })
              }}
              style={style.opacityWight}
            >
              <Text style={style.opacityWightText}>
                {strings.orderLater}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.opacityView2}>
            <LinearGradientForMap
              text={strings.orderNow}
              style={style.opacity}
              press={() => {
                this.props.setHomeComponent(2)
              }}
            />
          </View>
        </View>
      )
    }
  }

  _renderItem({ item, index }) {
    var base = new Base
    return (item
      // <Image style={{ width: 80, height: 80, marginHorizontal: 20 }}
      //  source={ require('../assets/Assets/Group_1634.png') } />
    );
  }

  _renderSubItem({ item, index }) {
    var base = new Base
    return (item
      // <Image style={{ width: 80, height: 80, marginHorizontal: 20 }}
      //  source={ require('../assets/Assets/Group_1634.png') } />
    );
  }

  RenderSubCategories() {
    var base = new Base
    console.log(parseInt(self.state.page))
    // if(parseInt(self.state.page)){
    return (
      <View style={{ flex: .3, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 70, right: 0, left: 0, overflow: 'hidden' }} >
        {/* {console.log('address',self.props.common.adress)} */}
        <View style={{ position: 'absolute', bottom: 80, flex: 1, flexDirection: 'row', flexWrap: 'wrap', }}  >
          <Carousel
            firstItem={0}
            inactiveSlideScale={.4}
            slideStyle={{}}
            data={
              self.props.service[parseInt(self.state.page)].sup_serivces_data.map(subService => (
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
              ))
            }
            renderItem={self._renderSubItem}
            sliderWidth={width}
            itemWidth={width / 3}
          />
        </View>
      </View>
    )
    // }
    // else{
    // return <View/>}
  }


  setCoordinates = (lat,lng) =>{
    console.log('marker',this.marker)
    this.marker.setCoordinate({
      latitude:lat,
      longitude:lng
    })
  }

  render() {
    const {
      service,
      selectedServices,
      services,
      createorder,
      navigation
    } = this.props
    const base = new Base()
    console.log(service)
    return (
      <View style={{ flex: 1, position: "relative", zIndex: 0 }}>
        <View style={{ width: "100%", position: 'absolute', zIndex: 3 }}>
          {this.props.common.driverLat == '' && this.props.compState.__CurrentComponent == 1 ?
            <GooglePlacesInput />
            :
            null
          }
        </View>
        <MapView
          onPress={() => {
            if (this.state.servicesSliderState == true) {
              this.setState({ servicesSliderState: false })
            } else {
              this.setState({ servicesSliderState: true })
            }
          }}
          mapType={this.state.mapState}
          style={{ flex: 1, borderRadius: 10, borderWidth: 2, zIndex: 0, borderColor: "#fff" }}
          region={{
            latitude: this.props.common.lat ? this.props.common.lat : 6.2672295570373535,
            longitude: this.props.common.lng ? this.props.common.lng : 31.229478498675235,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChangeComplete={(e)=>{
            this.props.watchPosition(e.latitude, e.longitude)
            this.props.setCoordnates(e.latitude, e.longitude) 
           this.setState({ servicesSliderState: true })
          }}
        >
          {/* <MapView.Marker ref={(e)=>this.marker=e}
            pinColor={"rgba(153, 137, 0,0.5)"}
            // image={ require("../assets/Assets/Group-1353.bmp")}
            draggable={true}
            coordinate={{
              // new MapView.AnimatedRegion({
              latitude: this.props.common.lat ? this.props.common.lat : 6.2672295570373535,
              longitude: this.props.common.lng ? this.props.common.lng : 31.229478498675235
              // })
            }}
            onDragStart={() => {
              this.setState({ servicesSliderState: false })
            }}
          /> */}
          
          {this.props.common.driverLat != '' ?
            <MapView.Marker.Animated
              opacity={0.6}
              pinColor={"rgb(65, 118, 57)"}
              // image={"../assets/icons/faq-icon.png"}
              coordinate={{
                // new MapView.AnimatedRegion({
                latitude: this.props.common.driverLat ? this.props.common.driverLat : 0,
                longitude: this.props.common.driverLng ? this.props.common.driverLng : 0
                // })
              }}
            />
            :
            <View style={{ width: 0, height: 0 }} />
          }
        </MapView>


        <Image style={{width:20,height:30,position:'absolute',top:(height/2)-70,left:(width/2)-20}} source={require("../assets/Icons/marker.png")} />
        {this.props.compState.__CurrentComponent === 2 ?
          <OtlobNow />
          :
          <View style={{ width: 0, height: 0 }} />
        }
        {this.state.calenderShow == true ?
          <Calendar
            onDayPress={(day) => {
              this.setState({ calenderShow: false })
              console.log('selected day', day)
            }}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={(day) => {
              this.props.orderLater(day.dateString, this.props.user_id)
              this.setState({ calenderShow: false })
              console.log('selected day', day)
            }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'yyyy MM'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={(month) => { console.log('month changed', month) }}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            blurRadius={1}
            firstDay={1}
            showWeekNumbers={true}
            markingType={'custom'}
            style={{
              position: 'absolute',
              zIndex: 4,
              backgroundColor: 'rgba(255,255,255,0.8)',
              height: 320, alignItems: 'center', top: 0, justifyContent: 'center'
            }}
            theme={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              calendarBackground: 'rgba(255,255,255,0.8)',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: 'orange',
              monthTextColor: 'blue',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textMonthFontWeight: 'bold',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16
            }}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={substractMonth => substractMonth()}
            // Handler which gets executed when press arrow icon left. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
            // Enable horizontal scrolling, default = false
            horizontal={true}
            // Enable paging on horizontal, default = false
            pagingEnabled={true}
          />
          :
          <View style={{ width: 0, height: 0 }} />
        }
        {/* Right side buttons */}
        {this.props.common.driverLat == '' && this.props.compState.__CurrentComponent == 1 ? <View style={{ position: "absolute", right: 16, top: 105 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('FavoritePlaces')}
            style={styles.touchable}
          >
            <Image source={Images.pinIcon} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (this.state.mapState == "satellite") {
                this.setState({ mapState: "standard" })
              } else {
                this.setState({ mapState: "satellite" })
              }
            }}
            style={[styles.touchable, { marginTop: 16 }]}
          >
            <Image source={Images.sataliteIcon} style={styles.image} />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => {}} style={[styles.touchable, { marginTop: 16 }]}>
            <Image source={Images.kabbaIcon} style={styles.image} />
          </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={() => {}} style={[styles.touchable, { marginTop: 16 }]}>
            <Image source={Images.locatiOnMapIcon} style={styles.image} />
          </TouchableOpacity> */}
        </View> : null}
        {service.length > 0 && this.props.compState.__CurrentComponent == 1 && this.props.common.driverLat == '' && this.state.servicesSliderState == true ?
          <View style={{ position: "absolute", left: 0, bottom: 10, right: 0 }}>
            {parseInt(self.state.page) >= 0 ? this.RenderSubCategories() : null}
            <View style={{ flex: .3, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 0, right: 0, left: 0, overflow: 'hidden' }} >
              <View style={{ position: 'absolute', bottom: 20, flex: 1, flexDirection: 'row', flexWrap: 'wrap', right: 0, left: 0 }}  >
                <Carousel
                  firstItem={0}
                  onSnapToItem={
                    // currentMainCategory => this.setState({ currentMainCategory })
                    page => {
                      selectedServices([
                        services[page].sup_serivces_data[0],
                        services[page]
                      ]);
                      createorder({
                        services_id: services[page]["services_id"],
                        sub_services_id: services[page].sup_serivces_data[0]["sub_services_id"]
                      });
                      console.log(page.toString())
                      this.setState({ page: page.toString() })
                    }
                  }
                  inactiveSlideScale={.4}
                  slideStyle={{}}
                  data={
                    self.props.service.map(mainService => (

                      <TouchableOpacity
                        key={mainService.services_id}
                        style={{
                          marginBottom: 40,
                          height: 130,
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <Image
                          source={{
                            uri: base.icon_url + mainService.icone,  
                            resizeMode:"contain"
                          }}
                          style={{
                            width: 70,
                            height: 70,
                            borderRadius: 35,
                          }} />
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
                    ))
                  }
                  renderItem={this._renderItem}
                  sliderWidth={width}
                  itemWidth={width / 3}
                />
              </View>
              {this.orderButtons_View()}
            </View>
          </View>
          :
          <View style={{ width: 0, height: 0 }} />
        }
        {this.props.common.driverLat != '' ?
          <ProviderInfo
            info={this.state.provider_info}
          // name='محمد أحمد مصطفي ' 
          // carType='Mercedes 2018' 
          // mints={8} 
          // phoneNumber='012345678'
          // profileImage='http://www.status77.in/wp-content/uploads/2015/07/14533584_1117069508383461_6955991993080086528_n.jpg' 
          />
          :
          <View style={{ width: 0, height: 0 }} />
        }
      </View>
    )
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
    service: state.makeOrder.service,
    common: state.common,
    compState: state.compState,
    makeOrder: state.makeOrder,
    user_id: state.auth.user_id
  }
}

export default connect(mapStateToProps, {
  getServices,
  setHomeComponent,
  selectedServices,
  providerInfo,
  setOrderID,
  favlocationlist,
  reverseCoordinatesToAdress,
  setCoordnates,
  setDriverCoordnates,
  createorder,
  refreshPlayerId,
  orderLater,
  loginUser
})(withNavigation(Map))
