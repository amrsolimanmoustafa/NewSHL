import React, { Component } from 'react';
import { 
  View, 
  FlatList,
  Text,
  Image,  
} from 'react-native';
import { connect } from 'react-redux'
import { withNavigation } from "react-navigation";
import axios from 'axios';
import Base from "../Base"

class Notifications extends Component {
  constructor(props){
    super(props)
    this.state = {
      notificationsList: []
    
    }
  }

  componentWillMount(){
    this.getNotifications(this.props.user_id)
  }

  getNotifications(user_id){
    var base_url =new Base()
    var GET_NOTIFICATIONS_URL="http://" + base_url.baseUrl + "clintnotification/"+user_id+"?lang="+base_url.lang
    var self=this
    console.log(GET_NOTIFICATIONS_URL)
    try {
      axios
        .get(GET_NOTIFICATIONS_URL)
        .then((res) =>{
          console.log(res.data)
          this.setState({notificationsList: res.data})
        })
        .catch(function(error) {
        
        });
    }catch (error) {
    
    }
  }

  renderNotificationItem(item){
    return (
      <View style={{flex: 1,height: 40,padding: 4,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <Image
            source={require('../assets/Icons/User-icon.png')}
            style={{width: 24,height: 24}}
          />
          <Text style={{marginLeft: 5,fontFamily: 'NeoSansArabic',fontSize: 16,color: '#707070',textAlign: 'left'}} >
            {item.notification_ar}
          </Text>
        </View>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <Text style={{fontFamily: 'NeoSansArabic',fontSize: 16,color: '#707070',textAlign: 'left'}} >
            {item.created_at? item.created_at : ' 09:00'}
          </Text>
        </View>
      </View>
    );
  }

  render() {   
    return (
      <View style={{flex: 1,padding: 16}}>
        <FlatList
          style={{flex: 1}}
          data={this.state.notificationsList}
          keyExtractor={(item, index) => index.toString() }
          renderItem={ ({item}) => this.renderNotificationItem(item) }
        />
      </View>
    )
  }
};

const styles = {
  rowStyle: {
    flexDirection: 'row-reverse',    
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOpacity: 0.45,
    shadowOffset: { height: 2, width: 0 } ,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 7,
    paddingVertical: 12,
  },
  subViewStyle: {
    flexDirection: 'row-reverse',    
    alignItems: 'center',
  },
  userIconStyle: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginLeft: 7, 
  },
  textStyle: {
    fontSize: 14,
    maxWidth: '90%',
    color: '#000000'
  }
};

const mapStateToProps = state => {
  return {
    user_id: state.auth.user_id,
  }
}
export default connect(mapStateToProps, {
  
}) (withNavigation(Notifications))