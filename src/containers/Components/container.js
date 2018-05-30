import React, { Component } from 'react';
import { Text, 
  View, 
  ImageBackground,
  TouchableOpacity,
  Image 
} from 'react-native';

import masterStyle from '../masterStyle';
import { Images } from '../../Themes';


//// images ////
const settingIcon = require('../assets/hagarAssets/settings-work-tool.png');

// style //
const {
  appBlueColor,
} = masterStyle;

/// 
const { headerStyle, } = masterStyle;

export default Container = ({ children, style, title }) => {
  return (
    <View style={[masterStyle.container]}>
      <ImageBackground 
      source={Images.loginBackground} 
      resizeMode='cover' 
      style={[styles.imageBackground]} 
      >
        {/* Header  */}
        <View style={[headerStyle]}>
          {/* // profile // */}
          <TouchableOpacity style={[styles.iconBtn]}>
            <Image source={Images.User} style={[styles.iconStyle]} />
          </TouchableOpacity>
          {/* // logo // */}
          <TouchableOpacity style={[styles.iconBtn]}>
            <Image source={Images.logoCenter} style={[styles.iconStyle, { height: 50 }]} />
          </TouchableOpacity>
          {/* // setting // */}
          <TouchableOpacity style={[styles.iconBtn]}>
            <Image source={settingIcon} style={[styles.iconStyle]} />
          </TouchableOpacity>
        </View>
        {/* /// chlildren /// */}
        <View style={[styles.childrenContainer, style]}>
          {/* //// Title /// */}
          <Text style={[styles.titleStyle, appBlueColor]} >{title}</Text>
          {/* // children component // */}
          { children }
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = {
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: 'transparent',
  },
  iconBtn: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    height: 35,
    width: 40,
    resizeMode: 'contain',
  },
  childrenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: { height: 3, width: 0 } ,
    elevation: 2,
    padding: 7,
  },
  titleStyle: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
};