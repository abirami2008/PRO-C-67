import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBGyPgNes9j7E4FVvocEOXQaMyJ8uMzYS4",
  authDomain: "team-voting-2b812.firebaseapp.com",
  databaseURL: "https://team-voting-2b812-default-rtdb.firebaseio.com",
  projectId: "team-voting-2b812",
  storageBucket: "team-voting-2b812.appspot.com",
  messagingSenderId: "997536990426",
  appId: "1:997536990426:web:f15c31b8eeead52dc591e3"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

export default firebase.database();
