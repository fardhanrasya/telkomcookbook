import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDR1pIUXKvFoCjs_rjnKj1FVEaNJM559Ag",
  authDomain: "telkom-cookbook.firebaseapp.com",
  projectId: "telkom-cookbook",
  storageBucket: "telkom-cookbook.appspot.com",
  messagingSenderId: "1031167265299",
  appId: "1:1031167265299:web:c5ff5691244d827df80de6"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }