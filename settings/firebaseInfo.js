
  const firebaseConfig = {
  apiKey: "AIzaSyAGtFxtkha91GBmjO8XnGufyaSLCd15C34",
  authDomain: "consultationtest-bbb83.firebaseapp.com",
  databaseURL: "https://consultationtest-bbb83-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "consultationtest-bbb83",
  storageBucket: "consultationtest-bbb83.appspot.com",
  messagingSenderId: "713288281435",
  appId: "1:713288281435:web:0025f0a7ae5ed3a0a23e7e"
};
  
  firebase.initializeApp(firebaseConfig);  
  var rootRef = firebase.database().ref();