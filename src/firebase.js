import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export const auth = app.auth();
export default app;

/*
** FIX **

REACT_APP_FIREBASE_API_KEY= AIzaSyAedazZHpyYWsPD4czwQg8rGGwax8FodaY
REACT_APP_FIREBASE_AUTH_DOMAIN= react-auth-86b39.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID= react-auth-86b39
REACT_APP_FIREBASE_STORAGE_BUCKET= react-auth-86b39.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID= 725742385217
REACT_APP_FIREBASE_APP_ID= 1=725742385217=web=9fb0a15da6db91b31aeec0
REACT_APP_FIREBASE_MEASUREMENT_ID= G-565LKV2BW2
*/
