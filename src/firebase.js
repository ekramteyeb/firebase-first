import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_MESSAGING_APP_ID
  };

  /* 

  const firebaseConfig = {
  apiKey: "AIzaSyAHbLjeCwAEWqOi7c9uEexHRY--dxDfduA",
  authDomain: "first-firebase-74be3.firebaseapp.com",
  projectId: "first-firebase-74be3",
  storageBucket: "first-firebase-74be3.appspot.com",
  messagingSenderId: "322697028725",
  appId: "1:322697028725:web:7daf254784d314f63ec43c"
};
  
  */

  firebase.initializeApp(firebaseConfig)

  export default firebase

  