import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    flex:1,
    backgroundColor:"white"
  },
  loginBackground:{
    width:"100%",
    height:"100%"
  },
  Map:{
    position:"absolute",
    height:"87.5%",
    width:"95%",
    marginTop:"18%",
    marginLeft:"2.5%",
    marginRight:"2.5%",
    marginBottom:"2.5%"
  }
})
