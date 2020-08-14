import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZu-mcN-HPDmq8tYmNCpFeRWjERu7tcRQ",
  authDomain: "clone-a1db4.firebaseapp.com",
  databaseURL: "https://clone-a1db4.firebaseio.com",
  projectId: "clone-a1db4",
  storageBucket: "clone-a1db4.appspot.com",
  messagingSenderId: "826288657817",
  appId: "1:826288657817:web:a3c8638838644fdb4b2f08",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
