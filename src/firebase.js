// import firebase from "firebase";

import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore/lite";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4N9SJ38UTrUKg16RbxPwjezhIvFuch5o",
  authDomain: "react-insta-1d4f3.firebaseapp.com",
  projectId: "react-insta-1d4f3",
  storageBucket: "react-insta-1d4f3.appspot.com",
  messagingSenderId: "668672401269",
  appId: "1:668672401269:web:277904c4d9eeb37530fd3c",
};

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.fireStore();
//   const auth = firebase.auth();
//   const storage = firebase.storage();
//   const provider = new firebase.auth.GoggleAuthProvider();

//   export { db, auth, storage, provider};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const fbDatabase = getDatabase(app);
export const fStore = getFirestore(app);
export const fStorage = getStorage(app);

export const storage = getStorage();

export const provider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  let user;
  await signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);

      user = result.user;
    })
    .catch((error) => {
      console.log(error);
    });
  return user;
};
