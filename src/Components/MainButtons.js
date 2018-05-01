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

class MainButtons extends Component {
  componentWillMount() {
    // this.props.getServices(this.props.adress)
    // console.log(this.props)
    var self=this
    this.reverseLoc().then(()=>self.props.getServices('Mohammed Farid'))
  }

  state={secondryServiceIcons:[],showMainServices:true,showMainButtons:false}
  constructor(props) {
    super(props);
    MainButtons = Animatable.createAnimatableComponent(MainButtons);

  }

  reverseLoc(){
    return new Promise((resolve,reject)=>{this.props.reverseCoordinatesToAdress('37.78825','-122.4324')
    resolve('')})
  }

  secondryServeciesButtons_View=()=>{
    return
  }
  
  renderSecondryIcons(secSrvs){
    console.log(secSrvs.sup_serivces_data)
    this.setState({secondryServiceIcons:secSrvs.sup_serivces_data})

    let base=new Base
    var self=this
    
    this.secondryServeciesButtons_View=()=>   
      self.state.secondryServiceIcons.map((seCservice,index) => (
        <TouchableOpacity onPress={()=>{
          this.setState({showMainButtons:true})
        }} key={index} style={styles.chooseServiceButton2}>
          <Image
            source={{ uri: base.icon_url + seCservice["icone"] }}
            style={styles.chooseServiceImage2}
          />
        </TouchableOpacity>
      ));
  }

  mainServeciesButtons_View = () =>{
    let base=new Base
    if(this.state.showMainServices)
    return this.props.service.map((mainservice, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => this.renderSecondryIcons(mainservice)}
        style={styles.chooseServiceButton}
      >
        <Animatable.Image
          animation="zoomIn"
          iterationCount={1}
          direction="alternate"
          source={{ uri: base.icon_url + mainservice["icone"] }}
          style={styles.chooseServiceImage}
        />
      </TouchableOpacity>
    ));
  }

  orderButtons_View=()=>{
    if(this.showMainButtons){
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
            <LinearGradientForMap text="اطلب الان" style={styles.opacity}  press={() => {}}/>
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
        {/*<View style={styles.chooseServiceView}>
          {this.secondryServeciesButtons_View()}
        </View>*/}
        {this.props.service.length > 0?
          <View style={{height: 100,backgroundColor: 'red'}}>
            <CarouselPager
              ref={ref => this.carousel = ref}
              initialPage={2}
              pageStyle={{height: 100,backgroundColor: 'green',alignItems: 'center',justifyContent: 'center'}}
            >
              {this.props.service.map((mainService) => (
                <TouchableOpacity
                  key={mainService.services_id}
                  //onPress={() => this.renderSecondryIcons(mainservice)}
                  style={{width: 70,height: 70,borderRadius: 35,backgroundColor: 'yellow',justifyContent: 'center',alignItems: 'center'}}
                >
                  <Animatable.Image
                    animation="zoomIn"
                    iterationCount={1}
                    direction="alternate"
                    source={{ uri: base.icon_url + mainService.icone }}
                    style={{width: 42.7,height: 22.8,resizeMode: 'cover'}}
                  />
                  <Text style={{marginTop: 10,fontSize: 12}}>
                    {mainService.services_name_ar}
                  </Text>
                </TouchableOpacity>
              ))}
            </CarouselPager>
          </View>
        :
          <View  style={{width: 0,height: 0}}/>
        }

        {/*this.orderButtons_View()*/}
      </View>)
  }
}

//===============================//
const mapStateToProps = state => {
  // console.log(state.makeOrder.service)
  return {
    services: state.makeOrder.services.data,
    service: state.makeOrder.service ,
    common: state.common
  }
}
  
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, { getServices, reverseCoordinatesToAdress}) (withNavigation(MainButtons))