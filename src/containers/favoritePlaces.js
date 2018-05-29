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

const RESPONSE = [
  {"NAME":"المنزل","STREET":"225 Bills Place","RowSelected":true},
  {"NAME":"المنزل 2","STREET":"486 Manhattan Avenue","RowSelected":false},
  {"NAME":"المنزل 3","STREET":"486 Manhattan Avenue","RowSelected":false},
]
 class FavoritePlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
 
  }
componentWillMount(){
  // this.props.favlocationlist(this.props.user_id)
  console.log(this.props) 
}
  render () {
   

    const {
      navigation
    } = this.props
    return (
      <View style={styles.container}>
          <Text style={styles.SubHeading}>
            تتيح الصفحة اضافة العناوين المفضلة لاستخدامها بالخدمات
          </Text>
         {console.log(this.props.makeOrder.favlocationlist.data.length)} 
          <View style={styles.FavoritePlacesListStyle}>
            {this.props.makeOrder.favlocationlist.data.length>0?this.props.makeOrder.favlocationlist.data.map((item,index)=>(
              <TouchableOpacity
                key={index}
                onPress={()=> this.setState({selectedPlace: item})}
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
            )):null}
          </View>
          <TouchableOpacity
            onPress={()=> navigation.navigate('AddFavoritePlace')}
            style={styles.AddView}
          >
            <Icon name="plus" type="SimpleLineIcons" style={styles.AddIcon}/>
            <Text style={styles.AddText}>
              إضافة
            </Text>
          </TouchableOpacity>
      </View>
    )
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
) (withNavigation(FavoritePlaces))