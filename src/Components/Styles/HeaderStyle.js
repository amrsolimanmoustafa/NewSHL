import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    height:"10%",
    width:"100%",
    flexDirection:"row",
    justifyContent: 'space-between',
    
  },
  component:{
    height:"100%",
    width:"20%",
  },
  componentCenter:{
    height:"100%",
    width:"20%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerButton:{
    backgroundColor:"#rgba(0,0,0,0)",
    height:"100%",
    width:"100%",
    justifyContent:"center"
  },
  headerButton2:{
    backgroundColor:"#rgba(0,0,0,0)",
    height:"100%",
    width:"100%",
    paddingRight:"0%",
    justifyContent:"center"

  },
  Icon:{
    fontSize:45,
    color:"white"
  }
})
