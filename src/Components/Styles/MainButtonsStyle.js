import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
    //alignItems: "center",
  },
  whenToOrderView: {
    flexDirection: "row",
    alignItems: "center",
    height: "25%",
    marginTop: "3%"
  },
  opacityView: {
    marginTop: "0%",
    borderRadius: 100,
    width: "45%",
    height: "90%",
    marginLeft: "10%",
    elevation: 10
  },
  opacityView2: {
    marginTop: "0%",
    borderRadius: 100,
    width: "45%",
    height: "90%",
    marginRight: "10%",
    elevation: 10,
    marginLeft: "5%"
  },
  opacity: {
    marginTop: "0%",
    borderRadius: 80,
    width: "100%",
    height: "100%",
    alignItems: "center"
  },
  opacityWight: {
    marginTop: "0%",
    borderRadius: 80,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    marginLeft: "0%"
  },
  opacityWightText: {
    marginTop: "8%",
    fontSize: 18
  },
  chooseServiceView: {
    //height: "60%",
    //width: "100%",
    //flexDirection: "row",
    // backgroundColor: "#rgba(256, 256, 256, 0.2)",
    // borderRadius: 20,
    // borderColor: "#rgba(256, 256, 256, 0.8)",
    // borderWidth: 5,
    justifyContent: "center",
    // elevation: 10,
    marginTop: "1%",

    flex: 1
  },
  scrollViewServices: {
    //height: 80,
    //width: 380,
    flexDirection: "row",
    // backgroundColor: "#rgba(256, 256, 256, 0.2)",
    // borderRadius: 20,
    // borderColor: "#rgba(256, 256, 256, 0.8)",
    // borderWidth: 2,

    flex: 1
  },
  chooseServiceButton: {
    //backgroundColor: "red",
    flex: 1,
    // elevation: 10,
    alignItems: "center",
    //marginLeft: "2%",
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: "#rgb(57,180,76)"
  },
  chooseServiceImage: {
    height: "100%",
    width: "100%",
    flex:1,
    borderWidth: 1,
    borderRadius: 100,

    borderColor: "#rgb(57,180,76)"
  },
  chooseServiceView2: {
    height: "25%",
    width: "50%",
    flexDirection: "row",
    backgroundColor: "#rgba(255, 255, 255, 0.4)",
    borderRadius: 100,
    justifyContent: "space-between",
    elevation: 10
  },
  chooseServiceButton2: {
    backgroundColor: "white",
    borderRadius: 100,
    height: "100%",
    width: "30%",
    elevation: 10,
    alignItems: "center",
    marginLeft: "2%",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#rgb(57,180,76)"
  },
  chooseServiceImage2: {
    height: "65%",
    width: "65%"
  }
});
