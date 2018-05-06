
import * as firebase from 'firebase';

// should go in a secret file
var config = {
    apiKey: "AIzaSyAm7qwx12pV5PdH100bkZQTtLfR6BGKk5U",
    authDomain: "shlapp-fd7eb.firebaseapp.com",
    databaseURL: "https://shlapp-fd7eb.firebaseio.com",
    projectId: "shlapp-fd7eb",
    storageBucket: "shlapp-fd7eb.appspot.com",
    messagingSenderId: "663864784757"
  };
  
  firebase.initializeApp(config);

export default firebase;