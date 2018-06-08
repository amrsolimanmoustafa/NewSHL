import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import styles from './Styles/FavoritePlacesStyle'
import { Icon } from 'native-base';
import { connect } from 'react-redux'
import { withNavigation } from "react-navigation";
import {favlocationlist} from "../actions/makeOrderAction"
import {setCoordnates} from "../actions/CommonServicesActions/commonServicesActions"
import strings from '../strings'

 class FavoritePlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount(){
    this.props.favlocationlist(this.props.user_id)
  }

  render () {
    const {
      navigation
    } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.SubHeading}>
          {strings.thePageAllowsYouToAddBookmarksToUseForServices}
        </Text>
        <View style={styles.FavoritePlacesListStyle}>
          {this.props.makeOrder.favlocationlist.data?
            this.props.makeOrder.favlocationlist.data.map((item,index)=>(
              <TouchableOpacity
                key={index}
                onPress={()=> {
                  console.log(item)
                  this.props.setCoordnates(item.lat,item.long)
                  this.setState({selectedPlace: item})
                  navigation.navigate('HomeScreen')
                }}
                style={{flexDirection: 'row',alignItems: 'center',paddingVertical: 10}}
              >
                <View style={{width: 20,height: 20,borderWidth: 1,borderColor: '#3C403F',borderRadius: 10,justifyContent: 'center',alignItems: 'center'}}>
                  <View style={{width: 10,height: 10,backgroundColor: this.state.selectedPlace == item? '#3C403F' : 'transparent',borderRadius: 5}}/>
                </View>
                <Text style={{marginLeft: 10,fontFamily: 'NeoSansArabic',fontSize: 16,color: '#7D7D7D',textAlign: 'left'}}>
                  {item.label}
                </Text>
                <Text style={{marginLeft: 10,fontFamily: 'NeoSansArabic',fontSize: 14,color: '#B7B7B7',textAlign: 'left'}}>
                  {item.area}
                </Text>
              </TouchableOpacity>
            ))
          :
          null
        }
        </View>
        <TouchableOpacity
          onPress={()=> navigation.navigate('AddFavoritePlace',{title: strings.add})}
          style={styles.AddView}
        >
          <Icon name="plus" type="SimpleLineIcons" style={styles.AddIcon}/>
          <Text style={styles.AddText}>
            {strings.add}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    common: state.common,
    makeOrder:state.makeOrder,
    user_id:state.auth.user_id
  }
}

export default connect(mapStateToProps,{
  favlocationlist,
  setCoordnates
}) (withNavigation(FavoritePlaces))