import React from 'react'
import { ScrollView, ImageBackground, TouchableOpacity, Image, View,  } from 'react-native'
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation'
import HomeScreen from '../containers/HomeScreen'
import VerifyPhoneScreen from '../containers/VerifyPhoneScreen'
import LoginScreen from '../containers/LoginScreen'
import SplashScreen from '../containers/SplashScreen'
import LaunchScreen from '../containers/LaunchScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import styles from '../containers/Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  VerifyPhoneScreen: { screen: VerifyPhoneScreen },
  LoginScreen: { screen: LoginScreen },
  SplashScreen: { screen: SplashScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SplashScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

const MainDrawer = DrawerNavigator(
  {
    Home: {
      screen: PrimaryNav,
      navigationOptions: {
        drawerLabel: ' الرئيسية ',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name='ios-home-outline' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    Contact: {
      screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
      navigationOptions: {
        drawerLabel: ' التواصل مع الادارة ',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name='ios-microphone-outline' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    Terms: {
      screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
      navigationOptions: {
        drawerLabel: ' الشروط و الاحكام ',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name='ios-paper-outline' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    About: {
      screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
      navigationOptions: {
        drawerLabel: ' عن التطبيق ',
        drawerIcon: ({ tintColor }) => (
          <EvilIcons name='question' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    Prices: {
      screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
      navigationOptions: {
        drawerLabel: ' اسعار الخدمات ',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name='md-pricetags' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    JoinUs: {
      screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
      navigationOptions: {
        drawerLabel: ' انضم كمزود خدمة ',
        drawerIcon: ({ tintColor }) => (
          <EvilIcons name='user' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    Share: {
      screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
      navigationOptions: {
        drawerLabel: ' شاركنا رأيك ',
        drawerIcon: ({ tintColor }) => (
          <EvilIcons name='share-google' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    Adds: {
      screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
      navigationOptions: {
        drawerLabel: ' العروض ',
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
        drawerLabel: ' تعديل البيانات الشخصية ',
        drawerIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name='account-edit' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    OrdersHistory: {
      screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
      navigationOptions: {
        drawerLabel: ' تاريخ الطلبات ',
        drawerIcon: ({ tintColor }) => (
          <FontAwesome name='history' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    FavPlaces: {
      screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
      navigationOptions: {
        drawerLabel: ' الاماكن المفضلة ',
        drawerIcon: ({ tintColor }) => (
          <EvilIcons name='bell' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    Notifications: {
      screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
      navigationOptions: {
        drawerLabel: ' التنبيهات ',
        drawerIcon: ({ tintColor }) => (
          <FontAwesome name='heart' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    Wallet: {
      screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
      navigationOptions: {
        drawerLabel: ' المحفظة ',
        drawerIcon: ({ tintColor }) => (
          <Entypo name='wallet' size={28} tintColor={tintColor} color="#36B051" />
        ),
      }
    },
    Points: {
      screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
      navigationOptions: {
        drawerLabel: ' النقاط ',
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
