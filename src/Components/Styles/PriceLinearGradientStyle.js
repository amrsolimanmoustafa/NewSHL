import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    alignSelf:"center",
    backgroundColor:"transparent",
    height:"5%",
    width:"50%",
    marginLeft:"20%",
    // marginTop:"20",
    // position:'absolute',
    bottom:0,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    // elevation:10
    // ,
    flex:1
  },
  opacity:{
    height:"35%",
    width:"100%",
    borderRadius:70
  },
  linearGradient:{
    height:"45%",
    width:"100%",
    borderRadius:100,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  buttonText:{
    marginRight:"14%",
    marginTop:"8%",
    color:"white",
    fontSize:24   
  },
  priceView:{
    width:"50%",
    height:"80%",
    backgroundColor:"white",
    borderRadius:100,
    marginTop:"5%",
    marginLeft:"10%",
    elevation:50,
    justifyContent:"center",
  },
  priceText:{
    color:"#rgb(31,127,169)",
    fontSize:8,
    alignSelf:"center",
    textAlign:"center"
  },
})
