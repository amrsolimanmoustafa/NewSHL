import React, { Component } from 'react';
import { 
  View, 
  FlatList,
  Text,
  Image,  
 } from 'react-native';
import masterStyle from './masterStyle';
import Container from './Components/container';
import { Images } from './../Themes';
import Base from '../Base';
import axios from 'axios'
import { connect } from 'react-redux'
import { withNavigation } from "react-navigation";
import strings from '../strings';

// style //
const {
  appGreenColor,
  appGrayColor,
} = masterStyle;

 class OrdersHistory extends Component {
  constructor(props) {
    super(props);
// alert('test')  
this.getHistoryList()
  
}
  state = {
    ordersHistoryList: 
    [  ]
  }
  componentWillMount(){
    this.getHistoryList
  }
  getHistoryList(){
    // const {ordersHistoryList}=this.state
// alert('ss')
    var base_url =new Base()
    // console.log('test')


    var ORDERS_HISTORY_URL="http://" + base_url.baseUrl + "clintordershoistry/"+this.props.user_id+"?lang="+base_url.lang  
  try {
    axios
      .get(ORDERS_HISTORY_URL)
      .then((res) =>{
       this.setState({ ordersHistoryList:res.data})
 console.log(res.data)
      })
      .catch(function(error) {
      
      });
  }catch (error) {
  
  }
  }
      // { id: 1, 
      //   name: 'ماجد أحمد', 
      //   image: Images.offer1,
      //   cost: '100 ريال', 
      //   status: 'مكتمل',
      //   statusLabel: 'لحظى',
      //   serviceNmae: 'خدمة الصرف الصحي', 
      //   serviceType: 'خدمة فرعية 1', 
      //   cityName: 'حى الزهور', 
      //   address: '193 الحى السابع بجوار مسجد نورى الخطاب',
      //   date: '12/3/2018',
      // },
      // { id: 2, 
      //   name: 'ماجد أحمد', 
      //   image: Images.humanIcon,
        // cost: '100 ريال', 
        // status: 'مكتمل',
      //   statusLabel: 'لحظى',
      //   serviceNmae: 'خدمة الصرف الصحي', 
      //   serviceType: 'خدمة فرعية 1', 
      //   cityName: 'حى الزهور', 
      //   address: '193 الحى السابع بجوار مسجد نورى الخطاب',
      //   date: '12/3/2018',
      // },
      // { id: 3, 
      //   name: 'عبدالكريم أحمد', 
      //   image: Images.humanIcon,
      //   cost: '100 ريال', 
      //   status: 'غير مكتمل',
      //   statusLabel: 'مجدول',
      //   serviceNmae: 'خدمة الصرف الصحي', 
      //   serviceType: 'خدمة فرعية 1', 
      //   cityName: 'حى الزهور', 
      //   address: '193 الحى السابع بجوار مسجد نورى الخطاب',
      //   date: '12/3/2018',
      // },
      // { id: 4, 
      //   name: 'ماجد أحمد', 
      //   image: Images.humanIcon,
      //   cost: '100 ريال', 
      //   status: 'مكتمل',
      //   statusLabel: 'لحظى',
      //   serviceNmae: 'خدمة الصرف الصحي', 
      //   serviceType: 'خدمة فرعية 1', 
      //   cityName: 'حى الزهور', 
      //   address: '193 الحى السابع بجوار مسجد نورى الخطاب',
      //   date: '12/3/2018',
      // },
  
  ///////////////////////////////////////////
  renderOrderItem = ({ item }) => {
    var base =new Base
    return (
      <View style={[styles.rowStyle]}>
        <View style={[styles.imageContainer, styles.viewContainer]} >
     
     {/*  */}
          <Text style={[styles.titleStyle, appGreenColor]}>
            {item.sub_services!=null?item.sub_services.services_zone[0].price:null}
          </Text>
         {/*  */}
          <View style={[styles.AvatarView]}>
            
            <Image source={item.provider!= null?base.icon_url+item.provider.users.profile_pic:null} style={[styles.userIconStyle]}/>
          {item.provider!= null?console.log(base.icon_url+item.provider.users.profile_pic):null}
          </View>
        </View>
        <View style={[styles.nameContainer, styles.viewContainer]}>
          <Text style={[styles.titleStyle, appGreenColor]}>{item.provider!= null?item.provider.users.user_name:''}</Text>
          <Text style={[styles.labelStyle, appGrayColor]}>{item.created_at}</Text>
        </View>
        <View style={[styles.statusContainer, styles.viewContainer]}>
          <Text style={[styles.titleStyle, appGreenColor]}>{item.order_state}</Text>
        
          {/*  */}
          {/* <Text style={[styles.labelStyle, appGrayColor]}>{item.statusLabel}</Text> */}
          {/*  */}

        </View>
        <View style={[styles.serviceContainer, styles.viewContainer]}>
          <Text style={[styles.titleStyle, appGreenColor]}>{item.service!=null?item.service.services_name_ar:null}</Text>
          <Text style={[styles.labelStyle, appGrayColor]}>{item.sub_services!=null?item.sub_services.sub_services_name_ar:null}</Text>
          {/*  */}
          {/* <Text style={[styles.titleStyle, appGreenColor]}>{item.sub_services.services_zone[0].zones.zone_ar}</Text> */}
          {/*  */}
          <Text style={[styles.labelStyle, appGrayColor]}>{item.sub_services!=null?item.sub_services.services_zone[0].zones.zone_ar:null}</Text>          
        </View>
      </View>
    );
  }

  render() {   
    return (
      <View style={[masterStyle.container]}>
          <FlatList
            data={this.state.ordersHistoryList}
            keyExtractor={item => `${item.id}`}
            renderItem={this.renderOrderItem}
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
    padding: 7
  },
  AvatarView: {
    marginTop: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#ddd',
    borderWidth: 1
  },
  userIconStyle: {
    flex: 1,
    width: null,
    borderRadius: 25,
    resizeMode: 'cover',
    // marginLeft: 7, 
  },
  imageContainer: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: 16,
    textAlign: 'center' 
    
  },  
  labelStyle: {
    fontSize: 13,
    textAlign: 'center' 
  },
  nameContainer: {
    justifyContent: 'flex-end',
    flex: 1.2,
    marginLeft: 3,
    // backgroundColor: 'pink'        
  },
  statusContainer: {
    flex: 1,
    marginLeft: 3,
    // backgroundColor: 'yellow'    
  },
  serviceContainer: {
    flex: 1.9,
  },
  viewContainer: {
    alignItems: 'center',
  }

};

const mapStateToProps = state => {
  return {
    common: state.common,
    user_id: state.auth.user_id,
    makeOrder: state.makeOrder,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, {
  // getServices,
  // refreshPlayerId,
  // reverseCoordinatesToAdress,
  // setCoordnates
}) (withNavigation(OrdersHistory))
