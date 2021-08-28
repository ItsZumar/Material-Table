import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyC6H9J4spX4t2lK5Q-MKlZT9DZITQDWp0A",
  authDomain: "ecommerce-15fc6.firebaseapp.com",
  projectId: "ecommerce-15fc6",
  storageBucket: "ecommerce-15fc6.appspot.com",
  messagingSenderId: "112976263748",
  appId: "1:112976263748:web:d55a86f52abd068c681a11",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
