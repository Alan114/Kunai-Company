import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3SVLl5lg2B3cExNKd-KNn80Mclebtivs",
  authDomain: "kunai-company.firebaseapp.com",
  projectId: "kunai-company",
  storageBucket: "kunai-company.appspot.com",
  messagingSenderId: "1019742557000",
  appId: "1:1019742557000:web:f255682a0279c76132d97d",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
