import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
  appBlueColor: {
    color: '#0065b5',
  },
  appBlueBgColor: {
    backgroundColor: '#0065b5',
  },
  appGreenColor: {
    color: '#008c86',
  },
  appGreenBgColor: {
    backgroundColor: '#008c86',
  },
  appGrayColor: {
    color: '#bcbcbc',  
  },
  appGraygColor: {
    backgroundColor: '#bcbcbc',  
  },
  container: {
    flex: 1,
    width: '100%'
  },
  headerStyle: {
    height: 80,
    width: '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descTextStyle: {
    fontSize: 13,
    textAlign: 'right',
    color: '#bcbcbc',
    lineHeight: 18
  },
  logoStyle: {
    width: 50,
    height: 70,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  appName: {
    fontSize: 24,
    color: '#8b8c8e',
    alignSelf: 'center',
    fontWeight: 'bold',
  }
});