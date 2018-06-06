import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,TouchableOpacity
} from 'react-native';

// localFiles //
import { Images } from './Themes';
import masterStyle from './masterStyle';
import Container from './Components/container';
import Button from './Components/button';

const {
  appGrayColor,
  dotStyle,
  appBlueBgColor,
} = masterStyle;

export default class JoinAsServiceProviderNow extends Component {
  state = {
    acceptRules: true,
  }
  ///////////////////////////////
  rulesOnPress = () => {
    this.setState(state => ({
      acceptRules: ! state.acceptRules,
    }));
  }
  //////////////////////////////
  render() {
    const { acceptRules } = this.state;
    return (
      <View style={[masterStyle.container]}>
          <ScrollView>
            <View style={[styles.rowStyle]}>
              <View style={[dotStyle]} />
              <Text style={[appGrayColor, styles.textStyle]}>قم بتسجيل بياناتك الخاصة</Text>
            </View>
            <View style={[styles.rowStyle]}>
              <View style={[dotStyle]} />
              <Text style={[appGrayColor, styles.textStyle]}>سيتم مراجعة طلبك من الادارة</Text>
            </View>
              <View style={[styles.rowStyle]}>
            <View style={[dotStyle]} />
              <Text style={[appGrayColor, styles.textStyle]}>سيتم اعلامك بموافقة او رفض طلبك</Text>
            </View>
            <View style={[styles.rowStyle]}>
              <View style={[dotStyle]} />
              <Text style={[appGrayColor, styles.textStyle]}>الموافقة على </Text>
              
              <TouchableHighlight 
              onPress={()=>{
                this.props.navigation.navigate('Rules')

              }} >
                <Text style={[styles.rulesText]}>الشروط والأحكام</Text>
              </TouchableHighlight>

              <TouchableOpacity 
              style={[styles.radioView, { borderWidth: acceptRules ? 0 : 1 } ]} 
              onPress={this.rulesOnPress}
              >
                { acceptRules &&
                  <Image 
                  source={Images.checkIcon} 
                  style={[styles.checkIconStyle]} 
                  />
                }
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/* /// btn ///  */}
          {this.state.acceptRules?<Button 
          onPress={() => 
console.log('clicked')          }
          title='التأكيد'
          />:null}
      </View>
    )
  }
};

const styles = {
  rowStyle: {
    flexDirection: 'row-reverse',
    marginVertical: 12,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 16
  },
  rulesText: {
    color: 'black',
    fontSize: 18,
    textDecorationLine: 'underline'
  },
  radioView: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 15,
    borderColor:'#008c86',
    borderWidth: 1,  
  },
  checkIconStyle: {
    width: null,
    flex: 1,
    resizeMode: 'contain'
  },
};