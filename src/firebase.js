import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvdLLNv65dI7XQtEtlpO_XTIerVtJIXBw",
  authDomain: "job-board-cegep-outaouais.firebaseapp.com",
  databaseURL: "https://job-board-cegep-outaouais.firebaseio.com",
  projectId: "job-board-cegep-outaouais",
  storageBucket: "job-board-cegep-outaouais.appspot.com",
  messagingSenderId: "676281305980",
  appId: "1:676281305980:web:cc43c7364a39b67821b2f9"
};

function initFirebase(config) {
  if (typeof window === "object") {
    return firebase.initializeApp(config);
  } else {
    const fb = require("firebase");
    return fb.initializeApp(config);
  }
}

const app = initFirebase(firebaseConfig);

// returning firestore handle
export const auth = app.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();

export const firestore = app.firestore();
