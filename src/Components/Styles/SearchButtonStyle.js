import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    height:"10%",
    width:"100%",
    marginBottom:"5%",
    position:'relative'

  },
  searchTouchable:{
    flexDirection:"row",
    backgroundColor:"white",
    borderRadius:10,
    width:"100%",
    height:"100%",
    marginLeft:"0%",
    marginRight:"0%",
    marginTop:"2%",
    justifyContent:"center",
    position:'absolute'
  },
  searchTouchableText:{
    marginRight:"0%",
    marginTop:"2%",
    fontSize:20,
    color:"grey"
  },
  searchTouchableIcon:{
    fontSize:34,
    marginTop:"2%",
    color:"grey",
    // backgroundColor:"white",
    borderRadius:100
  },
})
