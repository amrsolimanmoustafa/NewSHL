import React, { Component } from 'react';
import {
  I18nManager,
  AsyncStorage
} from 'react-native';

import LocalizedStrings from 'react-native-localization';
let strings = new LocalizedStrings({
    en:{
        insertMobileNumber: 'Insert your mobile number',
        youNeedToSignin: 'You need to sign in so you can take advantage of Shl application',
        mobile: 'Mobile',
        country: 'Country',
        signup: 'Signup',
        theConfirmationCodeHasBeenSentToThisNumber: 'The confirmation code has been sent to this number',
        enterTheCode: 'Enter the code',
        termsAndConditions: 'Terms and Conditions',
        accept: 'Accept',
        changeMobileNumber: 'Change mobile number',
        login: 'Login',
        approve: 'Approve',
        about: 'About',
        shl: 'SHL',
        placeName: 'Place name',
        confirm: 'Confirm',
        communicateWithManagement: 'Communicate with management',
        phoneNumbers: 'Phone numbers',
        address: 'Address',
        email: 'Email',
        thePageAllowsYouToAddBookmarksToUseForServices: 'The page allows you to add bookmarks to use for services',
        add: 'Add',
        notifications: 'Notifications',
        offers: 'offers',
        ordersHistory: 'Orders history',
        pricesOfServices: 'Prices of services',
        shareYourOpinion: 'Share your opinion',
        orderNow: 'Order now',
        orderLater: 'Order later',
        favoritePlaces: 'Favorite Places',
        home: 'Home',
        joinAsAServiceProvider: 'Join as a service provider',
        editPersonalData: 'Edit personal data',
        wallet: 'Wallet',
        points: 'Points',
    },
    ar:{
        insertMobileNumber: 'ادخل رقم الجوال',
        youNeedToSignin: 'يجب تسجيل الدخول حتي تستطيع الاستفادة من تطبيق سهل',
        mobile: 'رقم الهاتف',
        country: 'الدولة',
        signup: 'التسجيل',
        theConfirmationCodeHasBeenSentToThisNumber: 'تم ارسال كود التأكيد للرقم التالي',
        enterTheCode: 'ادخل الكود',
        termsAndConditions: 'الشروط و الاحكام',
        accept: 'الموافقة علي',
        changeMobileNumber: 'تغيير رقم الجوال',
        login: 'الدخول',
        approve: 'تآكيد',
        about: 'عن التطبيق',
        shl: 'سهل',
        placeName: 'اسم المكان',
        confirm: 'تآكيد',
        communicateWithManagement: 'التواصل مع الادارة',
        phoneNumbers: 'أرقام الهاتف',
        address: 'العنوان',
        email: 'البريد الالكتروني',
        thePageAllowsYouToAddBookmarksToUseForServices: 'تتيح الصفحة اضافة العناوين المفضلة لاستخدامها بالخدمات',
        add: 'إضافة',
        notifications: 'التنبيهات',
        offers: 'العروض',
        ordersHistory: 'تاريخ الطلبات',
        pricesOfServices: 'أسعار الخدمات',
        shareYourOpinion: 'شاركنا رأيك',
        orderNow: 'اطلب الان',
        orderLater: 'اطلب لاحقاً',
        favoritePlaces: 'الأماكن المفضلة',
        home: 'الرئيسية',
        joinAsAServiceProvider: 'انضم كمزود خدمة',
        editPersonalData: 'تعديل البيانات الشخصية',
        wallet: 'المحفظة',
        points: 'النقاط',
    },
    urdu:{
        insertMobileNumber: 'اپنا موبائل نمبر درج کریں',
        youNeedToSignin: 'آپ کو سائن ان کرنے کی ضرورت ہے لہذا آپ ایک آسان درخواست کا فائدہ اٹھا سکتے ہیں',
        mobile: 'فون نمبر',
        country: 'ملک',
        signup: 'رجسٹریشن',
        theConfirmationCodeHasBeenSentToThisNumber: 'اس نمبر پر توثیق کوڈ بھیج دیا گیا ہے',
        enterTheCode: 'کوڈ درج کریں',
        termsAndConditions: 'شرائط و ضوابط',
        accept: 'قبول کرو',
        changeMobileNumber: 'موبائل نمبر تبدیل کریں',
        login: 'میں لاگ ان کریں',
        approve: 'منظور',
        about: 'کے بارے میں',
        shl: 'سهل',
        placeName: 'جگہ کا نام',
        confirm: 'منظور',
        communicateWithManagement: 'انتظام کے ساتھ مواصلات',
        phoneNumbers: 'فون نمبر',
        address: 'ایڈریس',
        email: 'ای میل',
        thePageAllowsYouToAddBookmarksToUseForServices: 'یہ صفحہ آپ کو خدمات کے استعمال کے لئے بک مارک شامل کرنے کی اجازت دیتا ہے',
        add: 'شامل کریں',
        notifications: 'انتباہات',
        offers: 'پیشکش',
        ordersHistory: 'ایپلی کیشنز کی تاریخ',
        pricesOfServices: 'خدمات کی قیمتیں',
        shareYourOpinion: 'اپنی رائے کا اشتراک کریں',
        orderNow: 'اب آرڈر',
        orderLater: 'بعد میں پوچھو',
        favoritePlaces: 'پسندیدہ مقامات',
        home: 'گھر',
        joinAsAServiceProvider: 'سروس فراہم کرنے والے کے طور پر شامل ہوں',
        editPersonalData: 'ذاتی ڈیٹا میں ترمیم کریں',
        wallet: 'والٹ',
        points: 'پوائنٹس',
    }
})

if(I18nManager.isRTL){
    I18nManager.forceRTL(true);
    I18nManager.allowRTL(true);
    I18nManager.isRTL = true;
    AsyncStorage.getItem('uiLanguage',(error,language)=>{
        console.log(language)
        language = language? language : 'ar'
        strings.setLanguage(language);
    })
}else{
    I18nManager.forceRTL(false);
    I18nManager.allowRTL(false)
    I18nManager.isRTL = false;
    strings.setLanguage('en');
}

export default strings;