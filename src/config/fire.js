import firebase from 'firebase';

var firebaseConfig = {
  /*
    apiKey: "AIzaSyBy6EEcZu1V3-8Ehic44tgcVQBTeXI2VGU",
    authDomain: "editor-69f02.firebaseapp.com",
    databaseURL: "https://editor-69f02.firebaseio.com",
    projectId: "editor-69f02",
    storageBucket: "editor-69f02.appspot.com",
    messagingSenderId: "1067420621803",
    appId: "1:1067420621803:web:670b54e1cd5bdaac6e97ae"
    */

    apiKey: "AIzaSyBTWw8QtI9L6Ro2ip266Kn2Zy_jQET-7_o",
    authDomain: "auth-thesis-developement.firebaseapp.com",
    databaseURL: "https://auth-thesis-developement.firebaseio.com",
    projectId: "auth-thesis-developement",
    storageBucket: "auth-thesis-developement.appspot.com",
    messagingSenderId: "627965142884",
    appId: "1:627965142884:web:6373062bb602817f883c71"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;