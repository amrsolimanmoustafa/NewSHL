import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  backgroundImage:{
    flex:1,
    width:"100%",
    height:"100%",justifyContent:'center',alignItems:'center'
  },
})
