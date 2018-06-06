import React from 'react'
import {
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  View,
  Dimensions
} from 'react-native'
const {width,height} = Dimensions.get('window')
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation'

import SplashScreen from '../containers/SplashScreen'
import LoginScreen from '../containers/LoginScreen'
import VerifyPhoneScreen from '../containers/VerifyPhoneScreen'
import HomeScreen from '../containers/HomeScreen'
import FavoritePlaces from '../containers/favoritePlaces'
import AddFavoritePlace from '../containers/addFavoritePlace'
import ShareYourOpinion from '../containers/ShareYourOpinion'
import ServicesCost from '../containers/ServicesCost'
import JoinAsServiceProvider from '../containers/JoinAsServiceProvider'
import Rules from '../containers/Rules'
import ContactWithAdministration from '../containers/ContactWithAdministration'
import Offers from '../containers/Offers'
import AboutApp from '../containers/AboutApp'
import OrdersHistory from '../containers/OrdersHistory'
import Notifications from '../containers/Notifications'

import LeftNavigationDrawer from '../Components/leftNavigationDrawer'
import RightNavigationDrawer from '../Components/rightNavigationDrawer'

import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import styles from '../containers/Styles/NavigationStyles'

import strings from '../strings'

const PrimaryNav = StackNavigator({
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
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    })
  },
  AddFavoritePlace: {
    screen: AddFavoritePlace,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    })
  },
  EditProfile: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    })
  },
  Terms: {
    screen: Rules,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    })
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    })
  },
  Wallet: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    })
  },
  Points: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    })
  },
  AboutApp: {
    screen: AboutApp,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    })
  },
  OrdersHistory: {
    screen: OrdersHistory,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    })
  },
  Offers: {
    screen: Offers,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    })
  },
  ContactWithAdministration: {
    screen: ContactWithAdministration,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    })
  },
  ServicesCost: {
    screen: ServicesCost,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    })
  },
  ShareYourOpinion: {
    screen: ShareYourOpinion,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    })
  },
  JoinAsServiceProvider: {
    screen: JoinAsServiceProvider,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    })
  },
}, {
  // Default config for all screens
  //headerMode: 'none',
  headerBackTitle: null,
  initialRouteName: 'SplashScreen',
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

const MainDrawer = DrawerNavigator(
  {
    Home: {
      screen: PrimaryNav,
      navigationOptions: {
        title: strings.home,
      }
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: LeftNavigationDrawer,
    drawerPosition: 'left',
    drawerOpenRoute: 'LeftSideMenu',
    drawerCloseRoute: 'LeftSideMenuClose',
    drawerToggleRoute: 'LeftSideMenuToggle',
  },
);

const RootRoute = DrawerNavigator(
  {
    MainDrawer: {
      screen: MainDrawer,
    },
  },
  {
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
    },
    contentComponent: RightNavigationDrawer,
    drawerPosition: 'right',
    drawerOpenRoute: 'RightSideMenu',
    drawerCloseRoute: 'RightSideMenuClose',
    drawerToggleRoute: 'RightSideMenuToggle',
  },
);

// const RightDrawerContent = (props) => (
//   <ScrollView style={{ backgroundColor: 'red', flex: 1, }}>
//       <DrawerItems
//         {...props}
//     />
// </ScrollView>
// )

export default RootRoute