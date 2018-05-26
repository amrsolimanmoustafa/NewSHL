import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/FavoritePlacesStyle'
import FavoritePlacesList from "../Components/FavoritePlacesList"
import { Icon } from 'native-base';

export default class FavoritePlaces extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
          <Text style={styles.MainHeading}> الاماكن المفضلة </Text>
          <Text style={styles.SubHeading}> تتيح الصفحة اضافة العناوين المفضلة لاستخدامها بالخدمات </Text>
          <View style={styles.FavoritePlacesListStyle}>
            <FavoritePlacesList/>
          </View>
          <View style={styles.AddView}>
            <Icon name="plus" type="SimpleLineIcons" style={styles.AddIcon}/>
            <Text style={styles.AddText}> إضافة  </Text>
          </View>
      </View>
    )
  }
}
