import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    alignSelf:"center",
    backgroundColor:"transparent",
    width: 220,
    height: 100,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    position: 'absolute',
    bottom: 150,
  },
  opacity:{
    justifyContent: 'center',
  },
  linearGradient:{
    height: 70,
    width: 220,
    borderRadius: 35,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  buttonText:{
    marginRight:"14%",
    color:"white",
    fontSize:24   
  },
  priceView:{
    width:"50%",
    height:"80%",
    backgroundColor:"white",
    borderRadius: 100,
    elevation:50,
    justifyContent:"center",
    alignItems: 'center',
  },
  priceText:{
    color:"#rgb(31,127,169)",
    fontSize:8,
    alignSelf:"center",
    textAlign:"center"
  },
})
