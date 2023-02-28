import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDiFT8I7rcZoEp7ONBvc-AhfVj-0Oew_SY",
    authDomain: "react-hook-blog-ef5cf.firebaseapp.com",
    projectId: "react-hook-blog-ef5cf",
    storageBucket: "react-hook-blog-ef5cf.appspot.com",
    messagingSenderId: "508442602591",
    appId: "1:508442602591:web:ac1029295049a40992bfea"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();