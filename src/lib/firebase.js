import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Added compat to slove issues with firebase 9+

const config = {
  apiKey: "AIzaSyBP2mKu-jV3zCE8qhgUZNoFXhOJBdCAMY8",
  authDomain: "instagram-186b5.firebaseapp.com",
  projectId: "instagram-186b5",
  storageBucket: "instagram-186b5.appspot.com",
  messagingSenderId: "888218387375",
  appId: "1:888218387375:web:f34e6bd80a6894a8d9e55a"

}

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


export{ firebase, FieldValue };