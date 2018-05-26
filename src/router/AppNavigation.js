import React from 'react'
import { Dimensions } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import HomeScreen from '../containers/HomeScreen'
import VerifyPhoneScreen from '../containers/VerifyPhoneScreen'
import LoginScreen from '../containers/LoginScreen'
import SplashScreen from '../containers/SplashScreen'
import LaunchScreen from '../containers/LaunchScreen'

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
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

const MainDrawer = DrawerNavigator(
  {
    PrimaryNav,
  },
  {
    initialRouteName: 'PrimaryNav',
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
    },
    drawerPosition: 'right',
    drawerOpenRoute: 'RightSideMenu',
    drawerCloseRoute: 'RightSideMenuClose',
    drawerToggleRoute: 'RightSideMenuToggle',
  },
);


const RightDrawerNavigator = DrawerNavigator({
	
	// Note: Keys must not have spaces
	// "MyAccount" is good, but "My Account" is not accepted
	// Why? See: /constants/Languages.js
	Home: {
		screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
		navigationOptions: {
			// drawerIcon: ({ tintColor }) => (
			// 	<Ionicons name='ios-home-outline' color={mainColor} size={28} tintColor={tintColor} />
			// ),
		}
  },
  test: {
		screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
		navigationOptions: {
			// drawerIcon: ({ tintColor }) => (
			// 	<Ionicons name='ios-home-outline' color={mainColor} size={28} tintColor={tintColor} />
			// ),
		}
  },
  testtt: {
		screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
		navigationOptions: {
			// drawerIcon: ({ tintColor }) => (
			// 	<Ionicons name='ios-home-outline' color={mainColor} size={28} tintColor={tintColor} />
			// ),
		}
  },
  testtttt: {
		screen: ({ navigation }) => <HomeScreen navigation={navigation} />,
		navigationOptions: {
			// drawerIcon: ({ tintColor }) => (
			// 	<Ionicons name='ios-home-outline' color={mainColor} size={28} tintColor={tintColor} />
			// ),
		}
  },


}, {
    drawerPosition: 'right',
    drawerOpenRoute: 'RightSideMenu',
    drawerCloseRoute: 'RightSideMenuClose',
		// contentComponent: CustomDrawerContentComponent,
		contentOptions: {
			labelStyle: { color: 'black', fontWeight: 'normal' },
			activeTintColor: 'red',
			iconContainerStyle: {
				opacity: 1,
				marginRight: 0,
			}
		}
});

export default RootRoute
