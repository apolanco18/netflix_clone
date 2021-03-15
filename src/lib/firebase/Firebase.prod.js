import Firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';
// import seedDatabase from '../../seed';

const config = {
  apiKey: 'AIzaSyC6bm5K4sKQt9PcoF_PIKvG8tM5wmqo9Mw',
  authDomain: 'netflix-cbde6.firebaseapp.com',
  projectId: 'netflix-cbde6',
  storageBucket: 'netflix-cbde6.appspot.com',
  messagingSenderId: '858353781897',
  appId: '1:858353781897:web:431ee14747ad2f5fd9ca58',
  measurementId: 'G-MPPSRNDJ22',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
