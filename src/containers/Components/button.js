import React from 'react';
import { 
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import { Images } from '../Themes';

export default ({ onPress, style, title }) => {
  return (
    <TouchableOpacity 
    style={[styles.btnStyle, style ]}
    onPress={onPress}
    >
      <ImageBackground 
      source={Images.btnBackground} 
      style={[styles.btnImage]}
      resizeMode='cover'
      >
        <Text style={[styles.btnText]}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
const styles = {
  btnStyle: {
    width: '75%',
    height: 50,
    alignSelf: 'center',
    marginBottom: 20
  },
  btnImage: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: 'transparent',
  },
  btnText: {
    color: 'white',
    fontSize: 20
  }
};