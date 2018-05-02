import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,Image } from 'react-native'
import styles from './Styles/SelectedServicesStyle'
import { Images } from '../Themes';
import Base from '../Base'
import {selectedServices} from "../actions/makeOrderAction"
import { connect } from 'react-redux'
import { withNavigation } from "react-navigation";

class SelectedServices extends Component {
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
    console.log(this.props.makeOrder.selectedServices[1].icone,this.props.makeOrder.selectedServices[0].icone)
    var base=new Base();
    return (
      <View style={styles.container}>
        <View style={styles.ServiceView}>
        <Image 
        source={{ uri: base.icon_url + this.props.makeOrder.selectedServices[1].icone }}

        style={styles.ServiceImage}/>
        </View>
        <View style={styles.SubServiceView}>
        <Image 
        source={{ uri: base.icon_url + this.props.makeOrder.selectedServices[0].icone }}
        style={styles.ServiceImage}/>
        </View>
      </View>
    )
  }
}
const mapStateToProps = state => {
  return {
  
    makeOrder:state.makeOrder

  }
}
export default connect(mapStateToProps, {selectedServices}) (withNavigation(SelectedServices))