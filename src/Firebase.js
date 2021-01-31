import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAOkIV0mDbHYwz4DtwcivcD8wwm2vD5GzU",
  authDomain: "fmessenger-cacd0.firebaseapp.com",
  projectId: "fmessenger-cacd0",
  storageBucket: "fmessenger-cacd0.appspot.com",
  messagingSenderId: "11817684891",
  appId: "1:11817684891:web:bfe3d68674cbc950859b3e",
  measurementId: "G-J9Z9L0JBMG"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

export {db};