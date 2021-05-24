// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCPdJMYesOArIrjLAMi8zoMN5bAZ2z56Hk",
    authDomain: "whatsapp-clone-f91a3.firebaseapp.com",
    projectId: "whatsapp-clone-f91a3",
    storageBucket: "whatsapp-clone-f91a3.appspot.com",
    messagingSenderId: "817806496555",
    appId: "1:817806496555:web:65e35d06f37e2af59eab6e",
    measurementId: "G-75MYQ22432"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
