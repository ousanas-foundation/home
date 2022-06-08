import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getAnalytics} from 'firebase/analytics';


const firebaseConfig = {
    apiKey: "AIzaSyBPXuBGuoR-Hoos2i6yxCvwDNKT5rlx9og",
    authDomain: "ousanas-website.firebaseapp.com",
    projectId: "ousanas-website",
    storageBucket: "ousanas-website.appspot.com",
    messagingSenderId: "1066622927643",
    appId: "1:1066622927643:web:154adbc0dfa976caff09be",
    measurementId: "G-2X0EZFY81Q"
  };

let analytics; let firestore; let auth;
if (firebaseConfig?.projectId) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
    auth = getAuth(app);
  }

  // Access Firebase services using shorthand notation
  firestore = getFirestore();
}

export {analytics, firestore, auth};