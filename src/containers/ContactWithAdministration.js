import React, { Component } from 'react';
import { 
  View, 
  FlatList,
  Text,
  Image,  
  TouchableOpacity,
 } from 'react-native';

//  local files //
import masterStyle from './masterStyle';
import Container from './Components/container';
import { Images } from './../Themes';

// style //
const {
  appGreenBgColor,
  appGreenColor,
  appBlueBgColor,
  appBlueColor,
  appGrayColor,
} = masterStyle;

export default class ContactWithAdministration extends Component {
  state = {
    contacts: 
      [
       { id: 1, title: 'أرقام الهاتف', texts: ['9987883122526', '86886767677', '856554454555'], icon: Images.callIcon },
       { id: 2, title: 'العنوان', texts: ['Alex - Raml station', 'Cairo - Nasr city'], icon: Images.addressIcon },
       { id: 3, title: 'البريد الالكتروني', texts: ['test@test.com', 'test2@test.com', 'test3@test.com'], icon: Images.emailIcon },
      ],
      faceBook: 'https://www.facebook.com',
      twitter: 'https://twitter.com',
      instagram: 'https://www.instagram.com',
      skype: 'https://www.skype.com', 
  }
  ///////////////////////////////////////////
  // this function render Contacts Array as (phone numbers, emails ...)
  renderContactsArray = ({ item }) => {
    return (
      <View style={[styles.contactRowStyle]}>
        <View style={[styles.rowHeadrStyle]} >
          {/* <View style={[styles.iconView, appGreenBgColor ]}> */}
            <Image source={item.icon} style={styles.iconStyle} />
          {/* </View> */}
          <Text style={[styles.titleStyle, appGreenColor]}>{item.title}</Text>
        </View>
        <View style={[styles.textsView,]}>
          {
            item.texts.map((element, index )=> {
              return (
                <Text key={index} style={[styles.textStyle, appGrayColor]}>{element}</Text>
              );
            })
          }
        </View>
      </View>
    );
  }
  /////////////////////////////////////////// 
  render() {   
    const { faceBook, twitter, instagram, skype } = this.state;
    return (
      <View style={[masterStyle.container]}>
        <Container style={{ paddingHorizontal: 15,}} title='التواصل مع  الادارة' >
          {/* /// body /// */}
          <FlatList
          data={this.state.contacts}
          keyExtractor={item => `${item.id}`}
          renderItem={this.renderContactsArray}
          />
          {/* // Social icons // */}
          <View style={[styles.socialsView]}>
            {
              !!twitter && 
              <TouchableOpacity >
                <Image source={Images.twitterIcon} style={styles.socialImg} />
              </TouchableOpacity>
            }
            {
              !!skype && 
              <TouchableOpacity>
                <Image source={Images.skypeIcon} style={styles.socialImg} />
              </TouchableOpacity>
            }
            {
              !!instagram && 
              <TouchableOpacity>
                <Image source={Images.instagramIcon} style={styles.socialImg} />
              </TouchableOpacity>
            }
            {
              !!faceBook && 
              <TouchableOpacity>
                <Image source={Images.facebookIcon} style={styles.socialImg} />
              </TouchableOpacity>
            }
          </View>
        </Container>
      </View>
    )
  }
};

const styles = {
  titleStyle: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 5,
  },
  contactRowStyle: {
    alignItems: 'flex-end',
    marginTop: 20,
  },
  rowHeadrStyle: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  iconView: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginHorizontal: 5,        
    resizeMode: 'contain'
  },
  textStyle: {
    fontSize: 12,
    textAlign: 'right',
  },
  textsView: {
    marginRight: 30,
    marginTop: 12,
  },
  socialsView: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',    
    marginBottom: 50,
    marginHorizontal: 20,
  },
  socialImg: {
    width: 47,
    height: 47,
    resizeMode: 'contain'    
  }
};