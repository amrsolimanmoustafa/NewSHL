import React from 'react'
import {
  Image,
  Dimensions
} from 'react-native'
const {width,height} = Dimensions.get('window')
import { StackNavigator } from 'react-navigation'
import HomeScreen from '../containers/HomeScreen'
import VerifyPhoneScreen from '../containers/VerifyPhoneScreen'
import LoginScreen from '../containers/LoginScreen'
import SplashScreen from '../containers/SplashScreen'
import LaunchScreen from '../containers/LaunchScreen'
import FavoritePlaces from '../containers/favoritePlaces'
import AddFavoritePlace from '../containers/addFavoritePlace'

import styles from '../containers/Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: {
    screen: LaunchScreen,
    navigationOptions: {
      header: null
    }
  },
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  VerifyPhoneScreen: {
    screen: VerifyPhoneScreen,
    navigationOptions: {
      header: null
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  FavoritePlaces: {
    screen: FavoritePlaces,
    navigationOptions: {
      title: 'الأماكن المفضلة',
    }
  },
  AddFavoritePlace: {
    screen: AddFavoritePlace,
    navigationOptions: {
      title: 'إضافة',
    }
  }
}, {
  // Default config for all screens
  //headerMode: 'none',
  headerBackTitle: null,
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'transparent'
    },
    headerTitleStyle:{
      fontFamily: 'NeoSansArabic',
      fontSize: 18,
      color: '#ffffff'
    },
    headerTintColor: '#ffffff',
    headerBackground: (
      <Image
        source={require('../assets/images/rsz_123123.png')}
        style={{width: width,height: 64,resizeMode: 'cover'}}
      />
    )
  }
})

export default PrimaryNav
