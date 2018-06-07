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
                    <TouchableOpacity
                        style={{marginTop: 20,flexDirection: 'row',alignItems: 'center',justifyContent: 'flex-end',marginHorizontal: 16,paddingVertical: 12,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            navigation.navigate('ContactWithAdministration',{title: strings.communicateWithManagement})
                        }}
                    >
                        <Text style={{marginTop: 5,fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                            {strings.communicateWithManagement}
                        </Text>
                        <Image
                            source={require('../assets/icons/CommunicateWithManagement-icon.png')}
                            style={{marginLeft: 16,width: 25,height: 25}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginTop: 2.5,flexDirection: 'row',alignItems: 'center',justifyContent: 'flex-end',marginHorizontal: 16,paddingVertical: 12,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            navigation.navigate('Terms',{title: strings.termsAndConditions})
                        }}
                    >
                        <Text style={{fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                            {strings.termsAndConditions}
                        </Text>
                        <Image
                            source={require('../assets/icons/TermsAndConditions-icon.png')}
                            style={{marginLeft: 16,width: 25,height: 25}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginTop: 2.5,flexDirection: 'row',alignItems: 'center',justifyContent: 'flex-end',marginHorizontal: 16,paddingVertical: 12,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            navigation.navigate('AboutApp',{title: strings.about})
                        }}
                    >
                        <Text style={{fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                            {strings.about}
                        </Text>
                        <Image
                            source={require('../assets/icons/About-icon.png')}
                            style={{marginLeft: 15,width: 25,height: 15}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginTop: 2.5,flexDirection: 'row',alignItems: 'center',justifyContent: 'flex-end',marginHorizontal: 16,paddingVertical: 12,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            navigation.navigate('ServicesCost',{title: strings.pricesOfServices})
                        }}
                    >
                        <Text style={{fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                            {strings.pricesOfServices}
                        </Text>
                        <Image
                            source={require('../assets/icons/PricesOfServices-icon.png')}
                            style={{marginLeft: 16,width: 25,height: 26}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginTop: 2.5,flexDirection: 'row',alignItems: 'center',justifyContent: 'flex-end',marginHorizontal: 16,paddingVertical: 12,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            navigation.navigate('JoinAsServiceProvider',{title: strings.joinAsAServiceProvider})
                        }}
                    >
                        <Text style={{fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                            {strings.joinAsAServiceProvider}
                        </Text>
                        <Image
                            source={require('../assets/icons/JoinAsAServiceProvider-icon.png')}
                            style={{marginLeft: 16,width: 25,height: 25}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginTop: 2.5,flexDirection: 'row',alignItems: 'center',justifyContent: 'flex-end',marginHorizontal: 16,paddingVertical: 12,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            navigation.navigate('ShareYourOpinion',{title: strings.shareYourOpinion})
                        }}
                    >
                        <Text style={{fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                            {strings.shareYourOpinion}
                        </Text>
                        <Image
                            source={require('../assets/icons/ShareYourOpinion-icon.png')}
                            style={{marginLeft: 16,width: 25,height: 24}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginTop: 2.5,flexDirection: 'row',alignItems: 'center',justifyContent: 'flex-end',marginHorizontal: 16,paddingVertical: 12,borderColor: '#7D7D7D',borderBottomWidth: 1}}
                        onPress={() => {
                            navigation.navigate('Offers',{title: strings.offers})
                        }}
                    >
                        <Text style={{fontFamily: 'NeoSansArabic',fontSize: 14,color: '#1B76BB',textAlign: 'left'}}>
                            {strings.offers}
                        </Text>
                        <Image
                            source={require('../assets/icons/Offers-icon.png')}
                            style={{marginLeft: 16,width: 25,height: 31}}
                        />
                    </TouchableOpacity>
                    <View style={{marginTop: 20,paddingHorizontal: 16,flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                        <TouchableOpacity
                            onPress={() => this.changeLanguage('urdu')}
                            style={styles.languageButton}
                        >
                            <Image
                                source={require('../assets/icons/Twitter-icon.png')}
                                style={styles.languageImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.changeLanguage('urdu')}
                            style={styles.languageButton}
                        >
                            <Image
                                source={require('../assets/icons/Skype-icon.png')}
                                style={styles.languageImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.changeLanguage('en')}
                            style={styles.languageButton}
                        >
                            <Image
                                source={require('../assets/icons/Instagram-icon.png')}
                                style={styles.languageImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.changeLanguage('ar')}
                            style={styles.languageButton}
                        >
                            <Image
                                source={require('../assets/icons/Facebook-icon.png')}
                                style={styles.languageImage}
                            />
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
    justifyContent: 'center',
    padding: 10,
  },
  languageImage: {
    width: 28,
    height: 28
  },
});

const mapStateToProps = () => {
    return {
    };
};

export default connect(mapStateToProps,{

})(SideMenu);