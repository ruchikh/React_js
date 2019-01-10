import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyDZWvdk5I2B1teggLqsWkM9Jf9kl7vu1kw",
  authDomain: "marioplan-1bd1f.firebaseapp.com",
  databaseURL: "https://marioplan-1bd1f.firebaseio.com",
  projectId: "marioplan-1bd1f",
  storageBucket: "marioplan-1bd1f.appspot.com",
  messagingSenderId: "1034826295467"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 