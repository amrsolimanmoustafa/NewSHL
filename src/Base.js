
export default class Base {
                 constructor() {

                 }
                 baseUrl = 'admin.shl-app.com/api/';
                 icon_url='http://admin.shl-app.com/';
                 lang = "ar";
                 baseUrlWithLang() {
                   return baseUrl + lang + "/";
                 }
                 setLang(ln) {
                   lang = ln;
                   console.log("lang is st to : " + lang);
                 }
               }
