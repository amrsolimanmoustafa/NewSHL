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

import HomeScreen from '../containers/HomeScreen'
import VerifyPhoneScreen from '../containers/VerifyPhoneScreen'
import LoginScreen from '../containers/LoginScreen'
import SplashScreen from '../containers/SplashScreen'
import LaunchScreen from '../containers/LaunchScreen'
import FavoritePlaces from '../containers/favoritePlaces'
import AddFavoritePlace from '../containers/addFavoritePlace'
// import opinionRow from '../containers/opinionRow'
import ShareYourOpinion from '../containers/ShareYourOpinion'
import ServicesCost from '../containers/ServicesCost'
import JoinAsServiceProvider from '../containers/JoinAsServiceProvider'

import Rules from '../containers/Rules'
import ContactWithAdministration from '../containers/ContactWithAdministration'
import Offers from '../containers/Offers'
import AboutApp from '../containers/AboutApp'
import OrdersHistory from '../containers/OrdersHistory'
import Notifications from '../containers/Notifications'

import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import styles from '../containers/Styles/NavigationStyles'

import strings from '../strings'

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
  
  JoinAsServiceProvider: {
    screen: JoinAsServiceProvider,
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
      title: strings.favoritePlaces,
    }
  },
  AddFavoritePlace: {
    screen: AddFavoritePlace,
    navigationOptions: {
      title: strings.add,
    }
  },
  Rules: {
    screen: Rules,
    navigationOptions: {
      header: null
    }
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      header: null
    }
  },
  AboutApp: {
    screen: AboutApp,
    navigationOptions: {
      header: null
    }
  },
  OrdersHistory: {
    screen: OrdersHistory,
    navigationOptions: {
      header: null
    }
  },
  Offers: {
    screen: Offers,
    navigationOptions: {
      header: null
    }
  },
  ContactWithAdministration: {
    screen: ContactWithAdministration,
    navigationOptions: {
      header: null
    }
  },
  ServicesCost: {
    screen: ServicesCost,
    navigationOptions: {
      header: null
    }
  },
  ShareYourOpinion: {
    screen: ShareYourOpinion,
    navigationOptions: {
      header: null
    }
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
        drawerLabel: strings.home,
        drawerIcon: ({ tintColor }) => (
          <Ionicons name='ios-home-outline' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    Contact: {
      screen: ({ navigation }) => <ContactWithAdministration navigation={navigation} />,
      navigationOptions: {
        drawerLabel: strings.communicateWithManagement,
        drawerIcon: ({ tintColor }) => (
          <Ionicons name='ios-microphone-outline' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    Terms: {
      screen: ({ navigation }) => <Rules navigation={navigation} />,
      navigationOptions: {
        drawerLabel: strings.termsAndConditions,
        drawerIcon: ({ tintColor }) => (
          <Ionicons name='ios-paper-outline' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    About: {
      screen: ({ navigation }) => <AboutApp navigation={navigation} />,
      navigationOptions: {
        drawerLabel: strings.about,
        drawerIcon: ({ tintColor }) => (
          <EvilIcons name='question' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    Prices: {
      screen: ({ navigation }) => <ServicesCost navigation={navigation} />,
      navigationOptions: {
        drawerLabel: strings.pricesOfServices,
        drawerIcon: ({ tintColor }) => (
          <Ionicons name='md-pricetags' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    JoinUs: {
      screen: ({ navigation }) => <JoinAsServiceProvider navigation={navigation} />,
      navigationOptions: {
        drawerLabel: strings.joinAsAServiceProvider,
        drawerIcon: ({ tintColor }) => (
          <EvilIcons name='user' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    Share: {
      screen: ({ navigation }) => <ShareYourOpinion navigation={navigation} />,
      navigationOptions: {
        drawerLabel: strings.shareYourOpinion,
        drawerIcon: ({ tintColor }) => (
          <EvilIcons name='share-google' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    Adds: {
      screen: ({ navigation }) => <Offers navigation={navigation} />,
      navigationOptions: {
        drawerLabel: strings.offers,
        drawerIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name='sign-caution' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
  },
  {
    initialRouteName: 'Home',
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
    EditProfile: {
      screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
      navigationOptions: {
        drawerLabel: strings.editPersonalData,
        drawerIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name='account-edit' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    OrdersHistory: {
      screen: ({ navigation }) => <OrdersHistory navigation={navigation} />,
      navigationOptions: {
        drawerLabel: strings.ordersHistory,
        drawerIcon: ({ tintColor }) => (
          <FontAwesome name='history' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    FavPlaces: {
      screen: ({ navigation }) => <FavoritePlaces navigation={navigation} />,
      navigationOptions: {
        drawerLabel: strings.favoritePlaces,
        drawerIcon: ({ tintColor }) => (
          <EvilIcons name='bell' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    Notifications: {
      screen: ({ navigation }) => <Notifications navigation={navigation} />,
      navigationOptions: {
        drawerLabel: strings.notifications,
        drawerIcon: ({ tintColor }) => (
          <FontAwesome name='heart' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    Wallet: {
      screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
      navigationOptions: {
        drawerLabel: strings.wallet,
        drawerIcon: ({ tintColor }) => (
          <Entypo name='wallet' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    Points: {
      screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
      navigationOptions: {
        drawerLabel: strings.points,
        drawerIcon: ({ tintColor }) => (
          <Octicons name='gift' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
  },
  {
    navigationOptions: {
    },
    // contentComponent: RightDrawerContent,
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