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
  JoinAsServiceProvider: {
    screen: JoinAsServiceProvider,
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
        title: strings.home,
      }
    },
    Contact: {
      screen: ContactWithAdministration,
      navigationOptions: {
        title: strings.communicateWithManagement,
      }
    },
    Terms: {
      screen: Rules,
      navigationOptions: {
        title: strings.termsAndConditions,
      }
    },
    About: {
      screen: AboutApp,
      navigationOptions: {
        title: strings.about,
      }
    },
    Prices: {
      screen: ServicesCost,
      navigationOptions: {
        title: strings.pricesOfServices,
      }
    },
    JoinUs: {
      screen: JoinAsServiceProvider,
      navigationOptions: {
        title: strings.joinAsAServiceProvider,
      }
    },
    Share: {
      screen: ShareYourOpinion,
      navigationOptions: {
        title: strings.shareYourOpinion,
      }
    },
    Adds: {
      screen: Offers,
      navigationOptions: {
        title: strings.offers,
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