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
import masterStyle from './masterStyle';
import Container from './Components/container';
import { Images } from './../Themes';
import Base from "../Base"
import {aboutApp} from './../actions/ContentActions/contentActions'
import strings from '../strings'
// style //
const {
  appGreenColor,
  appGrayColor,
} = masterStyle;

class Notifications extends Component {
  constructor(props){
    super(props)
    this.state = {
      notificationsList: []
    // [
    //   { id: 1, text: 'تم وصول مقدم الخدمة للموقع وتم الاتفاق على المبلغ المطلوب وعلى الاصلاحات المطلوبة', date: '12/3/2018', time: '12:00 م' },
    //   { id: 2, text: 'تم وصول مقدم الخدمة للموقع', date: '12/3/2018', time: '12:00 م'  },
    //   { id: 3, text: 'تم وصول مقدم الخدمة للموقع', date: '12/3/2018', time: '12:00 م'  },
    //   { id: 4, text: 'تم وصول مقدم الخدمة للموقع', date: '12/3/2018', time: '12:00 م' },
    //   { id: 5, text: 'تم وصول مقدم الخدمة للموقع', date: '12/3/2018', time: '12:00 م'  },
    //   { id: 6, text: 'تم وصول مقدم الخدمة للموقع', date: '12/3/2018', time: '12:00 م'  },
    //   { id: 7, text: 'تم وصول مقدم الخدمة للموقع', date: '12/3/2018', time: '12:00 م' },
    //   { id: 8, text: 'تم وصول مقدم الخدمة للموقع', date: '12/3/2018', time: '12:00 م'  },
    //   { id: 9, text: 'تم وصول مقدم الخدمة للموقع', date: '12/3/2018', time: '12:00 م'  },
    //   { id: 10, text: 'تم وصول مقدم الخدمة للموقع', date: '12/3/2018', time: '12:00 م' },
    //   { id: 11, text: 'تم وصول مقدم الخدمة للموقع', date: '12/3/2018', time: '12:00 م'  },
    //   { id: 14, text: 'تم وصول مقدم الخدمة للموقع', date: '12/3/2018', time: '12:00 م'  },
    // ],
    }
  }

  componentWillMount(){
    this.getNotifications(this.props.user_id)
  }

  getNotifications(user_id){
    var base_url =new Base()
    var GET_NOTIFICATIONS_URL="http://" + base_url.baseUrl + "clintnotification/"+user_id+"?lang="+base_url.lang
    var self=this
    try {
      axios
        .get(GET_NOTIFICATIONS_URL)
        .then((res) =>{
          console.log('token uploaded',res.data)
          self.setState({notificationsList:res.data})
        })
        .catch(function(error) {
        
        });
    }catch (error) {
    
    }
  }

  renderNotificationItem(item){
    return (
      <View style={[styles.rowStyle]}>
        <View style={[styles.subViewStyle, { flex: 1.8 }]}>
          <Image source={Images.userIcon} style={[styles.userIconStyle, { resizeMode: 'contain' }]}/>
          <Text style={[appGrayColor, styles.textStyle]} >
            {item.notification_ar}
          </Text>
        </View>
        <View style={[styles.subViewStyle, { flex: 0.8, justifyContent: 'space-between', }]}>
          <Text style={[masterStyle.dateText, appGrayColor,]}>
            {item.created_at}
          </Text>
        </View>
      </View>
    );
  }

  render() {   
    return (
      <View style={[masterStyle.container]}>
          <FlatList
            data={this.state.notificationsList}
            keyExtractor={(item, index) => index.toString() }
            renderItem={this.renderNotificationItem}
          />
      </View>
    )
  }
};

const styles = {
  rowStyle: {
    flexDirection: 'row-reverse',    
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: { height: 1, width: 0 } ,
    // elevation: 0.5,
    marginTop: 15,
    width: '100%',
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