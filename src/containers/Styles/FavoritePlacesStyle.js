import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
    paddingVertical: 16,
    paddingHorizontal: 36,
  },
  SubHeading:{
    color:"#707070",
    fontSize: 16,
    textAlign: "center",

  },
  FavoritePlacesListStyle:{
    marginTop: 20
  },
  AddView:{
    marginTop: 30,
    flexDirection:"row",
    justifyContent:"center"
  },
  AddIcon:{
    fontSize: 24,
    color:"#28918B",
    textAlign:"center"
  },
  AddText:{
    marginLeft: 10,
    fontSize: 24,
    color:"#28918B",
    fontFamily: 'NeoSansArabic',
  }
})
