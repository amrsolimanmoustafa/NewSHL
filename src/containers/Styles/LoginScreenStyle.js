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
  main:{
    width:"100%",
    height:"100%",

  },
  loginLogo:{
    marginLeft:"40%",
    marginTop:"4%",
  },
  input:{
    // position:"absolute",
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop:"10%",
    height:"45%",
    alignItems:"center",
    marginLeft:"5%",
    marginRight:"5%",
    width:"90%",
    borderWidth:0,
    borderColor:"white",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    padding:0,
  },
  languages:{
    flexDirection:"row",
    width:"30%",
    // marginTop:"5%",
    marginLeft:"0%",
    height:"12%",
    marginRight:"0%",
  },
  flagStyle:{
    width:"20%",
    height:"70%",
    marginLeft:"0%"
  },
  flagTextStyle:{
    fontSize:17,
    color:"black",
    marginTop:"15%",
    marginRight:"4%",
    marginLeft:"0%"
  },
  allLanguages:{
    marginTop:"10%",
    flexDirection:"row",
    width:"100%",
    height:"100%",
    marginLeft:"0%",
    justifyContent:"center"
  }

})
