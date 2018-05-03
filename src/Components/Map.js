import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
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
import {getServices} from "../actions/makeOrderAction"
import Base from '../Base'
import LinearGradientForMap from "./LinearGradientForMap"
import style from './Styles/MainButtonsStyle'

const {width,height} = Dimensions.get('window')
class Map extends Component {
 //1: <OtlobMain/> 
  state= {lat:0,lng:0,currentComponent:1,showMainButtons:true}

  constructor(props) {
    super(props);
    this.state = {
      showMainButtons:true
    }
  }
  componentWillMount() {
    this.props.getServices('Mohammed Farid')
  }

  componentDidMount() {
    this.props.setHomeComponent(1)


    console.log(this.props)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        this.setState({lat:position.coords.latitude,lng:position.coords.longitude})

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
      service
    } =  this.props
    const base = new Base()
    console.log('lat ',this.props.common.lat)
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1,borderRadius: 10,borderWidth: 2,borderColor: '#fff'}}
          region={{
            latitude: this.state.lat,
            longitude:this.state.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          followsUserLocation={true}
        >
        </MapView>
        {/* Right side buttons */}
        <View style={{position: 'absolute',right: 16,top: 105}}>
          <TouchableOpacity
            onPress={()=>{}}
            style={styles.touchable}
          >
            <Image
              source={Images.pinIcon}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{}}
            style={[styles.touchable,{marginTop: 16}]}
          >
            <Image
              source={Images.sataliteIcon}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{}}
            style={[styles.touchable,{marginTop: 16}]}
          >
            <Image
              source={Images.kabbaIcon}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{}}
            style={[styles.touchable,{marginTop: 16}]}
          >
            <Image
              source={Images.locatiOnMapIcon}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        {service.length > 0?
          <View style={{position: 'absolute',left: 0,bottom: 10,right: 0}}>
            {/* Sub services */}
            {this.state.page?
              <View style={{height: 130,padding: 10,backgroundColor: 'rgba(255,255,255,0.8)',justifyContent: 'center',alignItems: 'center'}}>
                <CarouselPager
                  ref={ref => this.carousel = ref}
                  initialPage={0}
                  pageStyle={{height: 110,alignItems: 'center',justifyContent: 'center'}}
                  onPageChange={(page)=>{
                    console.log( page)
                    // this.setState({page:page,MainButtons:true})
                    
                    console.log( this.props.services[page].sup_serivces_data)
    
                
                  }}
                >
                  {service[parseInt(this.state.page)].sup_serivces_data.map((subService) => (
                    <TouchableOpacity
                      key={subService.services_id}
                      style={{height: 110,justifyContent: 'center',alignItems: 'center'}}
                    >
                      <Image
                        source={{ uri: base.icon_url + subService.icone }}
                        style={{width: 70,height: 70,borderRadius: 35,resizeMode: 'contain'}}
                      />
                      <Text style={{ marginTop: 5,fontSize: 12,color: 'rgb(30,123,177)'}}>
                        {subService.services_name_ar}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </CarouselPager>
              </View>
            :
              <View style={{width: 0,height: 0}}/>
            }
            {/* Main services */}
            <View style={{height: 130,padding: 10,backgroundColor: 'rgba(255,255,255,0.8)',justifyContent: 'center',alignItems: 'center'}}>
              <CarouselPager
                ref={ref => this.carousel = ref}
                initialPage={0}
                pageStyle={{height: 110,alignItems: 'center',justifyContent: 'center'}}
                onPageChange={(page)=>{
                  this.setState({page: page.toString()})
                }}
              >
                {service.map((mainService) => (
                  <TouchableOpacity
                    key={mainService.services_id}
                    style={{height: 110,justifyContent: 'center',alignItems: 'center'}}
                  >
                    <Image
                      source={{ uri: base.icon_url + mainService.icone }}
                      style={{width: 70,height: 70,borderRadius: 35,resizeMode: 'contain'}}
                    />
                    <Text style={{ marginTop: 5,fontSize: 12,color: 'rgb(30,123,177)'}}>
                      {mainService.services_name_ar}
                    </Text>
                  </TouchableOpacity>
                ))}
              </CarouselPager>
        
            </View>
              {this.orderButtons_View()}

       
          </View>
        :
          <View  style={{width: 0,height: 0}}/>
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
    reverseCoordinatesToAdress
  }) (withNavigation(Map))