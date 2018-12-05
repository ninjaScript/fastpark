import firebase from "firebase/app";
import "firebase/storage";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCqmx8m6KKwWvXXoIJ20CTlfc9TNl3x5wg",
  authDomain: "fastpark-33a13.firebaseapp.com",
  databaseURL: "https://fastpark-33a13.firebaseio.com",
  projectId: "fastpark-33a13",
  storageBucket: "fastpark-33a13.appspot.com",
  messagingSenderId: "178411885411"
};
firebase.initializeApp(config);

const storage = firebase.storage();
export { storage, firebase as default };
