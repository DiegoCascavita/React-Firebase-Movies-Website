import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAcp-6uHEs2cjniiSDNmV5s5pK7_UvqKQA",
    authDomain: "netflix-clone-3b5c5.firebaseapp.com",
    projectId: "netflix-clone-3b5c5",
    storageBucket: "netflix-clone-3b5c5.appspot.com",
    messagingSenderId: "351144271564",
    appId: "1:351144271564:web:a7f62bfda407f7fcb06c69"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

