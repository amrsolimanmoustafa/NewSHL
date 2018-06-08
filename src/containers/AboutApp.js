import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux'
import { withNavigation } from "react-navigation";

import { Images } from './../Themes';
import masterStyle from './masterStyle';
import Container from './Components/container';
import axios from 'axios';
import Base from "../Base"
import {aboutApp} from './../actions/ContentActions/contentActions'
import strings from '../strings';
const {width,height} = Dimensions.get('window')

class AboutApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      aboutAppText: ''
    }
  }

  componentWillMount(){
    this.aboutApp()
  }

  aboutApp=()=>{
    var base_url =new Base()
    var ABOUT_APP_URL="http://" + base_url.baseUrl + "aboutapp?lang="+base_url.lang
    var self=this
    try {
      axios
        .get(ABOUT_APP_URL)
        .then((res) =>{
          console.log('about res',res)
          self.setState({aboutAppText:res.data[0].aboutapp_ar})
        })
        .catch(function(error) {
        
        });
    }catch (error) {
    
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
          <Image source={Images.logoIcon} style={masterStyle.logoStyle} />
          <Text style={[masterStyle.appName]}>
            {strings.shl}
          </Text>
          <ScrollView style={{padding: 16}}>
            <Text style={[masterStyle.descTextStyle, { width: width - 32}]}>
              {this.state.aboutAppText}
            </Text>
          </ScrollView>
      </View>
    )
  }
};

const mapStateToProps = state => {
  return {
    contentReducers: state.contentReducers.aboutApp
  }
}

export default connect(mapStateToProps, {
  aboutApp
}) (withNavigation(AboutApp))