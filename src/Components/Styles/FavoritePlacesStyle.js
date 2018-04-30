import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    height:"100%",
    backgroundColor:"white",
    elevation:10,
    borderRadius:10
  },
  MainHeading:{
    color:"#rgb(27,118,187)",
    textAlign:"center",
    fontSize:32,
    marginTop:"3%"
  },
  SubHeading:{
    color:"#rgb(112,112,112)",
    fontSize:24,
    textAlign:"center",
    marginLeft:"15%",
    marginRight:"15%",
    marginTop:"5%",
    fontWeight:"900",

  },
  FavoritePlacesListStyle:{
    height:"50%",
    width:"90%",
    marginLeft:"5%",
    marginRight:"5%",
    marginTop:"5%"

  },
  AddView:{
    flexDirection:"row",
    justifyContent:"center"
  },
  AddIcon:{
    fontWeight:"900",
    fontSize:42,
    color:"#rgb(40,145,139)",
    textAlign:"center"
  },
  AddText:{
    fontWeight:"900",
    fontSize:36,
    color:"#rgb(40,145,139)",
    textAlign:"center"
  }
})
