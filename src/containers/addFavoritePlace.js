import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Dimensions
} from 'react-native'
import MapView from 'react-native-maps';
import LinearGradient from "react-native-linear-gradient"
const {width,height} = Dimensions.get('window')
import {addToFavLocs }from '../actions/makeOrderAction'
import { connect } from 'react-redux'
import { withNavigation } from "react-navigation";
import {favlocationlist} from "../actions/makeOrderAction"
 class AddFavoritePlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
lat:'',lng:'',area:'',label:''
    }
    // {"user_id":"1",
    //   "label":"المنزل",
    //   "area":"area",
    //   "long":"27.2454",
    //   "lat":"39.15454" }
    
  }

  componentWillMount(){
    var self=this
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        })
        self.setState({lat: position.coords.latitude,
          long: position.coords.longitude})
      },
      (error) => self.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000, distanceFilter: 100 },
    );
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <MapView
        dragble 
          style={{ flex: 1, borderRadius: 10, borderWidth: 2, borderColor: "#fff" }}
          initialRegion={{
            latitude:this.state.lat? this.state.lat : 6.2672295570373535,
            longitude:this.state.long? this.state.long : 31.229478498675235,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={(e)=> this.onMapPress(e.nativeEvent.coordinate)}
        >
          <MapView.Marker
            coordinate={
              new MapView.AnimatedRegion({
                latitude:this.state.marker? this.state.marker.latitude : 6.2672295570373535,
                longitude:this.state.marker? this.state.marker.longitude : 31.229478498675235
              })
            }
          />
        </MapView>
        <View style={{position: 'absolute',bottom: 0,left: 0,right: 0,padding: 16}}>
            <TextInput
              style={{height: 40,borderRadius: 20,backgroundColor: '#ffffff',shadowColor: '#000000',shadowOpacity: 0.5,shadowRadius: 6,shadowOffset: {width: 0,height: 3},color: '#000000',paddingHorizontal: 16}}
              underlineColorAndroid={'transparent'}
              placeholder={'Place name'}
              placeholderTextColor={'#A2A0A0'}
              onChangeText={(value)=> this.setState({placeName: value})}
            />
            <TouchableOpacity
              onPress={()=> this.submit()}
              style={{height: 40,marginTop: 8,borderRadius: 20,backgroundColor: '#ffffff',shadowColor: '#000000',shadowOpacity: 0.5,shadowRadius: 6,shadowOffset: {width: 0,height: 3}}}
            >
              <LinearGradient
                style={{flex: 1,borderRadius: 20,justifyContent: 'center',alignItems: 'center'}}
                start={{ x: 0.0, y: 0.25 }}
                end={{ x: 0.9, y: 1.0 }}
                locations={[0, 0.5, 0.9]}
                colors={["rgb(57,180,76)", "#299386", "rgb(29,122,179)"]}
              >
                <Text style={{color: '#ffffff',fontSize: 14,fontFamily: 'NeoSansArabic'}}>
                  Confirm
                </Text>
              </LinearGradient>
            </TouchableOpacity>
        </View>
      </View>
    )
  }

  onMapPress(coordinate){
    this.setState({
      marker: coordinate
    })
  }

  submit(){
    const placeName = this.state.placeName,
          coordinate = this.state.marker

  }
}

const mapStateToProps = state => {
  return {
    // services: state.makeOrder.services.data,
    // service: state.makeOrder.service ,
    // common: state.common,
    // compState:state.compState,
    makeOrder:state.makeOrder,
    user_id:state.auth.user_id

  }
}

export default connect(mapStateToProps,
  {
  favlocationlist
  }
) (withNavigation(AddFavoritePlace))