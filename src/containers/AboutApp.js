import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

// localFiles //
import { Images } from './../Themes';
import masterStyle from './masterStyle';
import Container from './Components/container';
import { withNavigation } from "react-navigation";
import { connect } from 'react-redux'
import axios from 'axios';
import Base from "../Base"
import {aboutApp} from './../actions/ContentActions/contentActions'


 class AboutApp extends Component {
  state = {
    aboutAppText: ''}
componentWillMount(){
  this.aboutApp()
}
aboutApp=()=>{
  var base_url =new Base()
  var ABOUT_APP_URL="http://" + base_url.baseUrl + "aboutapp?lang="+base_url.lang
  var self=this
  try {
    console.log('about res',ABOUT_APP_URL)

    axios
      .get(ABOUT_APP_URL)
      .then((res) =>{
        console.log('about res',res)
        self.setState({aboutAppText:res.data[0].aboutapp_ar})

        // dispatch({
        //   type:ABOUT_APP_URL,
        //   payload:res
        // })
      })
      .catch(function(error) {
      
      });
  }catch (error) {
  
  }
}
  render() {

    return (
      <View style={[masterStyle.container]}>
              { console.log(this.props.contentReducers) }

        <Container title='عن التطبيق' >
          <Image source={Images.logoIcon}  style={masterStyle.logoStyle} />
          <Text style={[masterStyle.appName]}>SHL</Text>
          <ScrollView>
            <Text style={[masterStyle.descTextStyle, { marginTop: 15 }]}>
            {/* { console.log(this.props.contentReducers.data[0].aboutapp_ar) } */}
{this.state.aboutAppText}
            </Text>
          </ScrollView>
        </Container>
      </View>
    )
  }
};
const mapStateToProps = state => {
  console.log('about  ..',state)
  return {
    contentReducers: state.contentReducers.aboutApp
  }
}
export default connect(mapStateToProps, {
  aboutApp
}) (withNavigation(AboutApp))