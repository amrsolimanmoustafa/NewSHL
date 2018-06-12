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
import Base from "../Base"
import axios from 'axios';

 class FavoritePlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[]
    }
  }

 async componentWillMount(){
   var self =this
      this.props.favlocationlist(this.props.user_id).then(()=>{
         self.setState({list: self.props.makeOrder.favlocationlist.data})

      })

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
            this.state.list.map((item,index)=>(
              <View key={index}>
                <TouchableOpacity
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
                <TouchableOpacity
                  onPress={()=> {
                    console.log(item)
                    var base_url = new Base()
                    var TERMS_URL="http://" + base_url.baseUrl + "deleteformfavlist/"+item.favourite_user_location_id
                    console.log('TERMS_URL',TERMS_URL)
                    var self=this
                    try {
                      axios
                        .get(TERMS_URL)
                        .then((res) =>{
                          var newList=self.props.makeOrder.favlocationlist.data.slice();
                          self.props.makeOrder.favlocationlist.data.splice(index,1)
                          self.setState({list:self.props.makeOrder.favlocationlist.data})
                          // self.props.makeOrder.favlocationlist.data.cloneWithRows(self.props.makeOrder.favlocationlist.data)
                          console.log(self.props.makeOrder.favlocationlist.data)

                        })
                        .catch(function(error) {
                        
                        });
                    }catch (error) {
                    
                    }
                  }} >
                  <Text style={{left:0,fontFamily: 'NeoSansArabic',fontSize: 24,color: 'red',position:'relative'}}>
                    X
                  </Text>
                </TouchableOpacity>
              </View>
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