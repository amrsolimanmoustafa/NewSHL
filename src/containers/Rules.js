import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux'
import { withNavigation } from "react-navigation";
import axios from 'axios';
import { Images } from './../Themes';
import masterStyle from './masterStyle';
import Container from './Components/container';
import {termsAndConditions} from './../actions/ContentActions/contentActions'
import Base from "../Base"
import strings from '../strings';

class Rules extends Component {
  constructor(props){
    super(props)
    this.state = {
      rulesText: 'Preparing the Android device, You will need an Android device to run your React Native Android app. This can be either a physical Android device, or more commonly, you can use an Android Virtual Device which allows you to emulate an Android device on your computer. Either way, you will need to prepare the device to run Android apps for development. Using a physical device  If you have a physical Android device, you can use it for development in place of an AVD by plugging it in to your computer using a USB cable and following the instructions here \n.Using a virtual device'
    }

    componentWillMount(){
      this.termsAndConditions()
    }
  }

  render() {
    return (
      <View style={[masterStyle.container]}>
        <Container title={strings.termsAndConditions}>
          <Image source={Images.logoIcon} style={masterStyle.logoStyle}/>
          <Text style={[masterStyle.appName]}>
            {strings.shl}
          </Text>
          <ScrollView>
            <Text style={[masterStyle.descTextStyle, { marginTop: 15 }]}>
              {this.state.rulesText}
            </Text>
          </ScrollView>
        </Container>
      </View>
    )
  }

  termsAndConditions(){
    var base_url =new Base()
    var TERMS_URL="http://" + base_url.baseUrl + "termsandconditions?lang="+base_url.lang
    console.log('TERMS_URL',TERMS_URL)
    var self=this
    try {
      axios
        .get(TERMS_URL)
        .then((res) =>{
          console.log(res)
          self.setState({rulesText: res.data[0].terms_condititon_ar})
        })
        .catch(function(error) {
        
        });
    }catch (error) {
    
    }
  }
}

const mapStateToProps = state => {
  return {
    contentReducers: state.terms
  }
}

export default connect(mapStateToProps, {
  termsAndConditions
}) (withNavigation(Rules))