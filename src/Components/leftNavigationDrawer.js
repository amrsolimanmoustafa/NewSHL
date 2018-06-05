import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ViewPropTypes,
    TouchableOpacity,
    Image,
    AsyncStorage,
    I18nManager,
    ScrollView,
    ImageBackground,
    Dimensions
} from 'react-native';
import { connect } from 'react-redux'
import RNRestart from 'react-native-restart';
import strings from '../strings';
import { DrawerActions } from 'react-navigation';
import {Images} from '../Themes';
const {width,height} = Dimensions.get('window')

class SideMenu extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }

    render() {
        return (
            <ImageBackground
                source={require('../assets/images/NavigationDrawer_BackgroundImage.png')}
                style={{flex: 1,backgroundColor: '#E3E1E1'}}
                resizeMode={'cover'}
            >
                <ScrollView scrollEnabled={false} style={styles.viewContainer}>
                    <View style={{alignItems: 'center'}}>
                        <Image
                            source={require('../assets/images/Temp_UserProfile_Image.png')}
                        />
                        <Text style={{marginTop: 10,fontFamily: 'NeoSansArabic',fontSize: 18,color: '#1B76BB',textAlign: 'center'}}>
                            اهلاً مهند
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{marginTop: 24,flexDirection: 'row',alignItems: 'center',marginHorizontal: 16,paddingVertical: 12,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            navigation.dispatch(DrawerActions.closeDrawer());
                            navigation.navigate('Main')
                        }}
                    >
                        <Image
                            source={require('../assets/icons/EditProfile-icon.png')}
                            style={{width: 25,height: 25}}
                        />
                        <Text style={{marginLeft: 16,marginTop: 5,fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                            {strings.editPersonalData}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginTop: 5,flexDirection: 'row',alignItems: 'center',marginHorizontal: 16,paddingVertical: 12,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            navigation.dispatch(DrawerActions.closeDrawer());
                            navigation.navigate('Main')
                        }}
                    >
                        <Image
                            source={require('../assets/icons/OrdersHistory-icon.png')}
                            style={{width: 25,height: 25}}
                        />
                        <Text style={{marginLeft: 16,fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                            {strings.ordersHistory}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginTop: 5,flexDirection: 'row',alignItems: 'center',marginHorizontal: 16,paddingVertical: 12,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            navigation.dispatch(DrawerActions.closeDrawer());
                            navigation.navigate('Main')
                        }}
                    >
                        <Image
                            source={require('../assets/icons/FavoritePlaces-icon.png')}
                            style={{width: 18,height: 24}}
                        />
                        <Text style={{marginLeft: 22,fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                            {strings.favoritePlaces}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginTop: 5,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',marginHorizontal: 16,paddingVertical: 12,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            navigation.dispatch(DrawerActions.closeDrawer());
                            navigation.navigate('Main')
                        }}
                    >
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                            <Image
                                source={require('../assets/icons/Notifications-icon.png')}
                                style={{width: 20,height: 24}}
                            />
                            <Text style={{marginLeft: 20,fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                                {strings.notifications}
                            </Text>
                        </View>
                        <View style={{width: 30,height: 30,borderRadius: 15,justifyContent: 'center',alignItems: 'center',backgroundColor: '#28918B'}}>
                            <Text style={{fontFamily: 'NeoSansArabic',fontSize: 14,color: '#ffffff',textAlign: 'center'}}>
                                1
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginTop: 5,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',marginHorizontal: 16,paddingVertical: 12,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            navigation.dispatch(DrawerActions.closeDrawer());
                            navigation.navigate('Main')
                        }}
                    >
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                            <Image
                                source={require('../assets/icons/Wallet-icon.png')}
                                style={{width: 25,height: 24}}
                            />
                            <Text style={{marginTop: 8,marginLeft: 17,fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                                {strings.wallet}
                            </Text>
                        </View>
                        <Text style={{marginTop: 8,fontFamily: 'NeoSansArabic',fontSize: 14,color: '#28918B',textAlign: 'right'}}>
                            150
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginTop: 5,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',marginHorizontal: 16,paddingVertical: 12,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            navigation.dispatch(DrawerActions.closeDrawer());
                            navigation.navigate('Main')
                        }}
                    >
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                            <Image
                                source={require('../assets/icons/Points-icon.png')}
                                style={{width: 24,height: 28}}
                            />
                            <Text style={{marginTop: 8,marginLeft: 16,fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                                {strings.points}
                            </Text>
                        </View>
                        <Text style={{marginTop: 8,fontFamily: 'NeoSansArabic',fontSize: 14,color: '#28918B',textAlign: 'right'}}>
                            20
                        </Text>
                    </TouchableOpacity>
                    <View style={{marginTop: 26,paddingHorizontal: 16,flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                        <TouchableOpacity
                            onPress={() => this.changeLanguage('ar')}
                            style={styles.languageButton}
                        >
                            <Image
                                source={Images.SaudiFlag}
                                style={styles.languageImage}
                            />
                            <Text style={styles.languageText}>
                                العربية
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.changeLanguage('en')}
                            style={styles.languageButton}
                        >
                            <Image
                                source={Images.USFlag}
                                style={styles.languageImage}
                            />
                            <Text style={styles.languageText}>
                                English
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.changeLanguage('urdu')}
                            style={styles.languageButton}
                        >
                            <Image
                                source={Images.IndiaFlag}
                                style={styles.languageImage}
                            />
                            <Text style={styles.languageText}>
                                اردو
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
    
    onLanguageChange(){
        if(I18nManager.isRTL){
            I18nManager.forceRTL(false);
            I18nManager.allowRTL(false);
            I18nManager.isRTL = false;
            strings.setLanguage('en');
        }else{
            I18nManager.forceRTL(true);
            I18nManager.allowRTL(true);
            I18nManager.isRTL = true;
            strings.setLanguage('ar');
        }
        RNRestart.Restart();
    }

    async logout(){
        const { navigation } = this.props;
        await AsyncStorage.multiRemove(['token','donorId','fullname','tempDonorId'])
        RNRestart.Restart();
    }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingTop: 50,
  },
  container: {
    height: 45,
    paddingHorizontal: 25,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#000000',
  },
  name: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '400'
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageImage: {
    width: 46,
    height: 33
  },
  languageText: {
    fontFamily: 'NeoSansArabic',
    fontSize: 16,
    color: '#707070'
  },
});

const mapStateToProps = () => {
    return {
    };
};

export default connect(mapStateToProps,{

})(SideMenu);