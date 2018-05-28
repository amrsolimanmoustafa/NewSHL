import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import styles from './Styles/FavoritePlacesStyle'
import { Icon } from 'native-base';

const RESPONSE = [
  {"NAME":"المنزل","STREET":"225 Bills Place","RowSelected":true},
  {"NAME":"المنزل 2","STREET":"486 Manhattan Avenue","RowSelected":false},
  {"NAME":"المنزل 3","STREET":"486 Manhattan Avenue","RowSelected":false},
]

export default class FavoritePlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
          <View style={styles.FavoritePlacesListStyle}>
            {RESPONSE.map((item,index)=>(
              <TouchableOpacity
                key={index}
                onPress={()=> this.setState({selectedPlace: item})}
                style={{flexDirection: 'row',alignItems: 'center',paddingVertical: 10}}
              >
                <View style={{width: 20,height: 20,borderWidth: 1,borderColor: '#3C403F',borderRadius: 10,justifyContent: 'center',alignItems: 'center'}}>
                  <View style={{width: 10,height: 10,backgroundColor: this.state.selectedPlace == item? '#3C403F' : 'transparent',borderRadius: 5}}/>
                </View>
                <Text style={{marginLeft: 10,fontFamily: 'NeoSansArabic',fontSize: 16,color: '#7D7D7D',textAlign: 'left'}}>
                  {item.NAME}
                </Text>
                <Text style={{marginLeft: 10,fontFamily: 'NeoSansArabic',fontSize: 14,color: '#B7B7B7',textAlign: 'left'}}>
                  {item.STREET}
                </Text>
              </TouchableOpacity>
            ))}
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