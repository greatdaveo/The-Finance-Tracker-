import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAtAnpeh6WbQjVeiEp7Ziz0M1_FytnmJE",
  authDomain: "my-moneyy-app.firebaseapp.com",
  projectId: "my-moneyy-app",
  storageBucket: "my-moneyy-app.appspot.com",
  messagingSenderId: "460346438126",
  appId: "1:460346438126:web:fe15d3a971ee35ed75deff",
  measurementId: "G-1M329ZFF50",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();

export { projectFirestore };
