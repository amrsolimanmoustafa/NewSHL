import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import { Images } from './../Themes';
import masterStyle from './masterStyle';
import Container from './Components/container';
import strings from '../strings'

export default class ServicesCost extends Component {
  state = {
    aboutAppText: 'Preparing the Android device, You will need an Android device to run your React Native Android app. This can be either a physical Android device, or more commonly, you can use an Android Virtual Device which allows you to emulate an Android device on your computer. Either way, you will need to prepare the device to run Android apps for development. Using a physical device  If you have a physical Android device, you can use it for development in place of an AVD by plugging it in to your computer using a USB cable and following the instructions here \n.Using a virtual device',
  }

  render() {
    return (
      <View style={[masterStyle.container]}>
          <Image source={{}} />
          {/* <Image source={Images.logoIcon}  style={masterStyle.logoStyle} />
          <Text style={[masterStyle.appName]}>SHL</Text> */}
          <ScrollView>
            <Text style={[masterStyle.descTextStyle, { marginTop: 15 }]}>
              { this.state.aboutAppText }
            </Text>
          </ScrollView>
      </View>
    )
  }
};
