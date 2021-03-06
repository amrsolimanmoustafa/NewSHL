import React from "react";
import { View, Image, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {setCoordnates} from "../actions/CommonServicesActions/commonServicesActions";

import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

const GooglePlacesInput = props => {

  return (
    <GooglePlacesAutocomplete
      style={{ flex: 1 }}
      placeholder="Search"
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed="auto" // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details.geometry.location.lat);
      props.setCoordnates(
          details.geometry.location.lat,
          details.geometry.location.lng
        );
      }}
      getDefaultValue={() => ""}
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: "AIzaSyC5UUR90MtnG1dsuOuIZtMtiqoPO1VuMYI",
        language: "en" // language of the results
        // types: "(cities)" // default: 'geocode'
      }}
      styles={{
        container: {
          borderWidth: 0,
          backgroundColor: "rgba(0,0,0,0)"
        },
        // ,poweredContainer	:{
        // width:0,flex:0,fontColor:"#FFF"
        // }
        textInputContainer: {
          backgroundColor: "rgba(0,0,0,0)"
          // borderWidth: 6,
          // borderColor:'#FFF',
          // borderRadius:3
        },
        textInput: {
          borderWidth: 0,
          marginLeft: 5,
          marginRight: 5,
          marginTop: 3,
          marginBottom: 0,
          height: 42,
          color: "#5d5d5d",
          fontSize: 16
        },
        description: {
          fontWeight: "bold"
        }
      }}
      //   currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      // currentLocationLabel="Current location"
      nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={
        {
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        }
      }
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: "distance",
        types: "food"
      }}
      filterReverseGeocodingByTypes={[
        "locality",
        "administrative_area_level_3"
      ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      // predefinedPlaces={[homePlace, workPlace]}
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      // renderLeftButton={() => (
      //   <Image source={require("path/custom/left-icon")} />
      // )}
      // renderRightButton={() => {}}
    />
  );
};
// export default GooglePlacesInput;

const mapStateToProps = state => {
  return {
    common:state.common,

   }
  }
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, { setCoordnates }) (withNavigation(GooglePlacesInput))
