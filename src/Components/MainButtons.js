import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import styles from './Styles/MainButtonsStyle'
import LinearGradientForMap from "./LinearGradientForMap"
import { Images } from '../Themes';
import Base from '../Base'

import {getServices} from "../actions/makeOrderAction"
import {reverseCoordinatesToAdress} from "../actions/CommonServicesActions/commonServicesActions"
import { withNavigation } from "react-navigation";
import { connect } from 'react-redux'

import * as Animatable from "react-native-animatable";
import CarouselPager from 'react-native-carousel-pager';
import {setHomeComponent} from "../actions/UpdateComponentsStateAction/updateComponentsStateAction"
import {selectedServices} from "../actions/makeOrderAction"

class MainButtons extends Component {
  componentWillMount() {
    // this.props.getServices(this.props.adress)
    // console.log(this.props)
    var self=this
    this.reverseLoc().then(()=>self.props.getServices('Mohammed Farid'))
  }

  state={secondryServiceIcons:[],showMainServices:true,showMainButtons:false,page:null}
  constructor(props) {
    super(props);
    MainButtons = Animatable.createAnimatableComponent(MainButtons);
  }

  reverseLoc(){
    return new Promise((resolve,reject)=>{this.props.reverseCoordinatesToAdress('37.78825','-122.4324')
    resolve('')})
  }

  orderButtons_View=()=>{
    if(this.state.showMainButtons){
      return (
        <View style={styles.whenToOrderView}>
          <View style={styles.opacityView}>
            <TouchableOpacity style={styles.opacityWight}>
              <Text style={styles.opacityWightText}>
                اطلب لاحقاً
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.opacityView2}>
            <LinearGradientForMap text="اطلب الان" style={styles.opacity}  press={() => {
              //dispach 2nd component in map view
              this.props.setHomeComponent(2)
            }}/>
          </View>
        </View>
      )
    }
  }

  //componnent render//
  render() {
    const base = new Base()
    return (
      <View style={styles.container}>
        <View style={styles.chooseServiceView}>
        {
          //render subservices when main service pager changed  
          this.state.page!=null?
            this.props.services[this.state.page].sup_serivces_data?
              <View style={{height: 50}}>
                <CarouselPager
                  ref={ref => this.carousel = ref}
                  initialPage={0}
                  pageStyle={{height: 100,alignItems: 'center',justifyContent: 'center'}}
                  onPageChange={(selectedService)=>{
                    //dispach selected services
                    this.props.selectedServices([this.props.services[this.state.page].sup_serivces_data[selectedService],this.props.services[this.state.page]])
                    console.log(this.props.makeOrder)
                    this.setState({showMainButtons:true})
                    ////////////////////////////
                    // console.log( this.props.services[this.state.page].sup_serivces_data[selectedService])
                  }}
                >
                  {this.props.services[this.state.page].sup_serivces_data.map((seCservice,index) => (
                    <TouchableOpacity 
                    key={index} 
                    style={{width: 100,height: 100,borderRadius: 35}}
                    >
                      <Image
                        source={{ uri: base.icon_url + seCservice["icone"] }}
                        style={{width: 60,height: 60,borderRadius: 35,zIndex:20 }}
                        />
                    </TouchableOpacity>
                  ))}
                </CarouselPager>
              </View>
            :
              <View/>
          :
            <View/>
        }
        </View>
          {this.props.service.length > 0?
            <View style={{height: 100}}>
              <CarouselPager
                ref={ref => this.carousel = ref}
                initialPage={0}
                pageStyle={{height: 100,alignItems: 'center',justifyContent: 'center'}}
                onPageChange={(page)=>{
                  console.log( page)
                  this.setState({page:page})
                  console.log( this.props.services[page].sup_serivces_data)
                }}
              >
                {
                  //render main services 
                  this.props.service.map((mainService) => (
                    <TouchableOpacity
                      key={mainService.services_id}
                      style={{width: 70,height: 70,borderRadius: 35,justifyContent: 'center',alignItems: 'center'}}
                    >
                      <Image
                      
                        source={{ uri: base.icon_url + mainService.icone }}
                      
                        style={{width: 70,height: 70,borderRadius: 35,justifyContent: 'center',alignItems: 'center'}}

                      />
                      <Text style={{ marginTop: 10,fontSize: 8}}>
                        {mainService.services_name_ar}
                      </Text>
                    </TouchableOpacity>
                  ))
                }
              </CarouselPager>
            </View>
          :
            <View style={{width: 0,height: 0}}/>
        }
        {this.orderButtons_View()}
      </View>
    )
  }
}

//===============================//
const mapStateToProps = state => {
  return {
    services: state.makeOrder.services.data,
    service: state.makeOrder.service ,
    common: state.common,
    compState:state.compState,
    makeOrder:state.makeOrder
  }
}
  
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, {selectedServices, getServices,setHomeComponent, reverseCoordinatesToAdress}) (withNavigation(MainButtons))