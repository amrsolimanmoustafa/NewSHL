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
import {connect} from 'react-redux'
import {withNavigation, NavigationActions} from 'react-navigation';                
import LinearGradient from "react-native-linear-gradient"
import {addToFavLocs }from '../actions/makeOrderAction'
import {reverseCoordinatesToAdress,setCoordnates} from "../actions/CommonServicesActions/commonServicesActions"
import strings from '../strings'
const {width,height} = Dimensions.get('window')

class AddFavoritePlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lng: '',
      area: '',
      label: ''
    }
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
      },
      (error) => self.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000, distanceFilter: 100 },
    );
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <MapView
          dragble={true}
          style={{ flex: 1, borderRadius: 10, borderWidth: 2, borderColor: "#fff" }}
          initialRegion={{
            latitude:this.props.common.lat? this.props.common.lat : 6.2672295570373535,
            longitude:this.props.common.lng?this.props.common.lng : 31.229478498675235,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={(e)=> this.onMapPress(e.nativeEvent.coordinate)}
        >
          <MapView.Marker draggable={true}
            coordinate={
              new MapView.AnimatedRegion({
                latitude: this.props.common.lat? this.props.common.lat : 6.2672295570373535,
                longitude: this.props.common.lng? this.props.common.lng : 31.229478498675235
              })
            }
            onDragEnd={(e) =>{
              this.props.setCoordnates(e.nativeEvent.coordinate.latitude,e.nativeEvent.coordinate.longitude)
              this.props.reverseCoordinatesToAdress(e.nativeEvent.coordinate.latitude,e.nativeEvent.coordinate.longitude)
              this.props.setCoordnates(e.nativeEvent.coordinate.latitude,e.nativeEvent.coordinate.longitude)
              this.setState({
                lat: e.nativeEvent.coordinate.latitude,
                long: e.nativeEvent.coordinate.longitude
              })
            }}
          />
        </MapView>
        <View style={{position: 'absolute',bottom: 0,left: 0,right: 0,padding: 16}}>
          <TextInput
            style={{height: 40,borderRadius: 20,backgroundColor: '#ffffff',shadowColor: '#000000',shadowOpacity: 0.5,shadowRadius: 6,shadowOffset: {width: 0,height: 3},color: '#000000',paddingHorizontal: 16}}
            underlineColorAndroid={'transparent'}
            placeholder={strings.placeName}
            placeholderTextColor={'#A2A0A0'}
            onChangeText={(value)=> this.setState({label: value})}
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
                {strings.confirm}
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
    console.log(this.state)
    console.log(this.props.common)
    let addLocToFav_obj={"user_id": this.props.user_id,"label": this.state.label,"area": this.props.common.adress,"lat": this.state.lat,"long": this.state.long}
    this.props.addToFavLocs(addLocToFav_obj)
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'HomeScreen'})
      ] })
    this.props.navigation.dispatch(resetAction);
  }
}

const mapStateToProps = state => {
  return {
    common: state.common,
    makeOrder: state.makeOrder,
    user_id: state.auth.user_id
  }
}

export default connect(mapStateToProps,{
  reverseCoordinatesToAdress,
  setCoordnates,
  addToFavLocs
}) (withNavigation(AddFavoritePlace))