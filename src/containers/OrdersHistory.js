import React, { Component } from 'react';
import { 
  View, 
  FlatList,
  Text,
  Image,  
 } from 'react-native';

//  local files //
import masterStyle from './masterStyle';
import Container from './Components/container';
import { Images } from './../Themes';
import Base from '../Base';
import axios from 'axios'
import { connect } from 'react-redux'
import { withNavigation } from "react-navigation";

// style //
const {
  appGreenColor,
  appGrayColor,
} = masterStyle;

 class OrdersHistory extends Component {
  state = {
    ordersHistoryList: 
    [  ]
  }
async  componentWillMount(){
   await this.getHistoryList
  }
  getHistoryList=()=>{

    var base_url =new Base()
    console.log('test')


    var ORDERS_HISTORY_URL="http://" + base_url.baseUrl + "clintordershoistry/"+this.props.user_id+"?lang="+base_url.lang  
  try {
    axios
      .get(ORDERS_HISTORY_URL)
      .then((res) =>{
 console.log(res)
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
    return (
      <View style={[styles.rowStyle]}>
        {/* imageContainer */}
        <View style={[styles.imageContainer, styles.viewContainer]} >
          <Text style={[styles.titleStyle, appGreenColor]}>
          {item.cost}
          </Text>
          <View style={[styles.AvatarView]}>
            <Image source={item.image} style={[styles.userIconStyle]}/>
          </View>
        </View>
        {/* nameContainer */}        
        <View style={[styles.nameContainer, styles.viewContainer]}>
          <Text style={[styles.titleStyle, appGreenColor]} >{item.name}</Text>
          <Text style={[styles.labelStyle, appGrayColor]} >{item.date}</Text>
        </View>
        {/* statusContainer */}        
        <View style={[styles.statusContainer, styles.viewContainer]}>
          <Text style={[styles.titleStyle, appGreenColor]} >{item.status}</Text>
          <Text style={[styles.labelStyle, appGrayColor]} >{item.statusLabel}</Text>
        </View>
        {/* serviceContainer */}        
        <View style={[styles.serviceContainer, styles.viewContainer]}>
          <Text style={[styles.titleStyle, appGreenColor]} >{item.serviceNmae}</Text>
          <Text style={[styles.labelStyle, appGrayColor]} >{item.serviceType}</Text>
          <Text style={[styles.titleStyle, appGreenColor]} >{item.cityName}</Text>
          <Text style={[styles.labelStyle, appGrayColor]} >{item.address}</Text>          
        </View>
      </View>
      
    );
  }
  /////////////////////////////////////////// 
  render() {   
    return (
      <View style={[masterStyle.container]}>
        <Container style={{ paddingHorizontal: 0,}} title='تاريخ الطلبات' >
          {/* // Orders History list // */}
          <FlatList
          data={this.state.ordersHistoryList}
          keyExtractor={item => `${item.id}`}
          renderItem={this.renderOrderItem}
          />
        </Container>
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