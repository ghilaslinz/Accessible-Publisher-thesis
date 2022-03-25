/*

import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBTWw8QtI9L6Ro2ip266Kn2Zy_jQET-7_o",
    authDomain: "auth-thesis-developement.firebaseapp.com",
    databaseURL: "https://auth-thesis-developement.firebaseio.com",
    projectId: "auth-thesis-developement",
    storageBucket: "auth-thesis-developement.appspot.com",
    messagingSenderId: "627965142884",
    appId: "1:627965142884:web:6373062bb602817f883c71"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
 // const provider = new firebase.auth.GoogleAuthProvider();

  export {auth};
  export  {db};
*/

  // enregistrer ici le vrai firebase
import firebase from "firebase";
const firebaseConfig = {
  /*
    apiKey: "AIzaSyBtVzn2_xJvOCO9cMWG9l7AtDPz6YIYyXM",
  authDomain: "neweditordatabase.firebaseapp.com",
  projectId: "neweditordatabase",
  storageBucket: "neweditordatabase.appspot.com",
  messagingSenderId: "811554180187",
  appId: "1:811554180187:web:27ba2af7e6f55a2a2a037e",
  measurementId: "G-5QL33B7TSQ"*/

  apiKey: "AIzaSyBTWw8QtI9L6Ro2ip266Kn2Zy_jQET-7_o",
    authDomain: "auth-thesis-developement.firebaseapp.com",
    databaseURL: "https://auth-thesis-developement.firebaseio.com",
    projectId: "auth-thesis-developement",
    storageBucket: "auth-thesis-developement.appspot.com",
    messagingSenderId: "627965142884",
    appId: "1:627965142884:web:6373062bb602817f883c71"

  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const storage = firebase.storage();
 // const provider = new firebase.auth.GoogleAuthProvider();

 export { db, storage, auth };