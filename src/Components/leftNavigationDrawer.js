import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
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
        const {
            navigation
        } = this.props
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
                        style={{marginTop: 20,flexDirection: 'row',alignItems: 'center',marginHorizontal: 16,paddingVertical: 10,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            //navigation.navigate('EditProfile',{title: strings.editPersonalData})
                        }}
                    >
                        <Image
                            source={require('../assets/Icons/EditProfile-icon.png')}
                            style={{width: 25,height: 25}}
                        />
                        <Text style={{marginLeft: 16,marginTop: 5,fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                            {strings.editPersonalData}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginTop: 2.5,flexDirection: 'row',alignItems: 'center',marginHorizontal: 16,paddingVertical: 10,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            navigation.navigate('OrdersHistory',{title: strings.ordersHistory})
                        }}
                    >
                        <Image
                            source={require('../assets/Icons/OrdersHistory-icon.png')}
                            style={{width: 25,height: 25}}
                        />
                        <Text style={{marginLeft: 16,fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                            {strings.ordersHistory}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginTop: 2.5,flexDirection: 'row',alignItems: 'center',marginHorizontal: 16,paddingVertical: 10,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            navigation.navigate('FavoritePlaces',{title: strings.favoritePlaces})
                        }}
                    >
                        <Image
                            source={require('../assets/Icons/FavoritePlaces-icon.png')}
                            style={{width: 18,height: 24}}
                        />
                        <Text style={{marginLeft: 22,fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                            {strings.favoritePlaces}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginTop: 2.5,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',marginHorizontal: 16,paddingVertical: 10,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            navigation.navigate('Notifications',{title: strings.notifications})
                        }}
                    >
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                            <Image
                                source={require('../assets/Icons/Notifications-icon.png')}
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
                    {/*<TouchableOpacity
                        style={{marginTop: 2.5,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',marginHorizontal: 16,paddingVertical: 10,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            //navigation.navigate('Wallet',{title: strings.wallet})
                        }}
                    >
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                            <Image
                                source={require('../assets/Icons/Wallet-icon.png')}
                                style={{width: 25,height: 24}}
                            />
                            <Text style={{marginTop: 8,marginLeft: 17,fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                                {strings.wallet}
                            </Text>
                        </View>
                        <Text style={{marginTop: 8,fontFamily: 'NeoSansArabic',fontSize: 14,color: '#28918B',textAlign: 'right'}}>
                            150
                        </Text>
                    </TouchableOpacity>*/}
                    <TouchableOpacity
                        style={{marginTop: 2.5,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',marginHorizontal: 16,paddingVertical: 10,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            //navigation.navigate('Points',{title: strings.points})
                        }}
                    >
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                            <Image
                                source={require('../assets/Icons/Points-icon.png')}
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
                    <TouchableOpacity
                        style={{marginTop: 2.5,flexDirection: 'row',alignItems: 'center',marginHorizontal: 16,paddingVertical: 10,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => this.logout()}
                    >
                        <Image
                            source={require('../assets/Icons/logout.png')}
                            style={{width: 24,height: 24}}
                        />
                        <Text style={{marginLeft: 16,fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                            {strings.logout}
                        </Text>
                    </TouchableOpacity>
                    <View style={{marginTop: 20,paddingHorizontal: 16,flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
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

    async changeLanguage(language){
        await AsyncStorage.setItem('uiLanguage',language)
        if(language == 'en'){
          I18nManager.forceRTL(false);
          I18nManager.isRTL = false;
          I18nManager.allowRTL(false)
        }else {
          I18nManager.forceRTL(true);
          I18nManager.isRTL = true;
        }
        RNRestart.Restart();
      }
    
    async logout(){
        AsyncStorage.clear()
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
        padding: 2.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    languageImage: {
        width: 30,
        height: 20
    },
    languageText: {
        marginLeft: 5,
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