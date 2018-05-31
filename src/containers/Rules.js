import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image,
  ScrollView,

} from 'react-native';

// localFiles //
import { Images } from './../Themes';
import masterStyle from './masterStyle';
import Container from './Components/container';
import {termsAndConditions} from './../actions/ContentActions/contentActions'
import { withNavigation } from "react-navigation";
import { connect } from 'react-redux'
import axios from 'axios';
import Base from "../Base"

 class Rules extends Component {
  state = {
    rulesText: 'Preparing the Android device, You will need an Android device to run your React Native Android app. This can be either a physical Android device, or more commonly, you can use an Android Virtual Device which allows you to emulate an Android device on your computer. Either way, you will need to prepare the device to run Android apps for development. Using a physical device  If you have a physical Android device, you can use it for development in place of an AVD by plugging it in to your computer using a USB cable and following the instructions here \n.Using a virtual device'
  }
componentWillMount(){
  // this.props.termsAndConditions()
  this.termsAndConditions()
}
  termsAndConditions=()=>{
  var base_url =new Base()
  var TERMS_URL="http://" + base_url.baseUrl + "termsandconditions?lang="+base_url.lang
  console.log('TERMS_URL',TERMS_URL)

var self=this
  try {
    axios
      .get(TERMS_URL)
      .then((res) =>{
        console.log(res)
    self.setState({rulesText:res.data[0].terms_condititon_ar})
      })
      .catch(function(error) {
      
      });
  }catch (error) {
  
  }
}
  render() {
    return (
      <View style={[masterStyle.container]}>
      {/* {console.log(this.props.contentReducers.data[0].terms_condititon_ar)} */}
        <Container title='الشروط والأحكام' >
          <Image source={Images.logoIcon}  style={masterStyle.logoStyle} />
          <Text style={[masterStyle.appName]}>SHL</Text>
          <ScrollView>
            <Text style={[masterStyle.descTextStyle, { marginTop: 15 }]}>
              {/* {this.props.contentReducers.data?this.props.contentReducers.data[0].terms_condititon_ar :null} */}
{this.state.rulesText}
            </Text>
          </ScrollView>
        </Container>
      </View>
    )
  }
};
const mapStateToProps = state => {
  return {
    contentReducers: state.terms
  }
}
export default connect(mapStateToProps, {
  termsAndConditions
}) (withNavigation(Rules))