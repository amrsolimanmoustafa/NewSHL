import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
    borderRadius:10,
    alignItems:"center",
    width:"100%",
    height:"100%",
    padding:5


  },
  heading:{
    color:"rgb(27,118,186)",
    textAlign:"center",
    fontSize:20,
    fontWeight:"600",
    marginTop:"3%",
    fontFamily:"NeoSansArabic",
  },
  heading2:{
    color:"rgb(112,112,112)",
    textAlign:"center",
    fontSize:16,
    marginLeft:"5%",
    marginTop:"3%",
    marginRight:"5%",
    fontWeight:"500",
    fontFamily:"NeoSansArabic",
  },
  inputBoxView:{
    flexDirection:"row",
    marginTop:"3%",
   

  },
  itemStyle:{
    marginLeft:"15%",
    marginRight:"15%",
    width:"70%",
  },
  formInputPlaceholder:{
    color:"rgb(27,118,186)",
    textAlign:"center",
    fontWeight:"500",
    marginLeft:"30%",
    marginRight:"0%",
    fontSize:24,
    marginTop:"0%",
    fontFamily:"NeoSansArabic",

  },
  input:{
    width:"100%",
    color:"rgb(27,118,186)",
    height:"100%",
    marginTop:"1%",
    padding:0,
    borderBottomWidth:1,
    borderBottomColor:"black",
    
  },
  opacity: {
    marginTop:"1%",
    borderRadius: 80,
    width:"80%",
    height:"40%",
    
  },
  radioButton:{
    flexDirection:"row",
    marginTop:"5%",
  },
  radioButtonText:{
    fontSize:20,
  },
  radioButtonTextBlue:{
    color:"rgb(27,118,186)",
    fontSize:20,
    textDecorationLine:"underline",
    marginLeft:"15%"
  },
})
