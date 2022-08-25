import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB4N9SJ38UTrUKg16RbxPwjezhIvFuch5o",
    authDomain: "react-insta-1d4f3.firebaseapp.com",
    projectId: "react-insta-1d4f3",
    storageBucket: "react-insta-1d4f3.appspot.com",
    messagingSenderId: "668672401269",
    appId: "1:668672401269:web:277904c4d9eeb37530fd3c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.fireStore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoggleAuthProvider();

  export { db, auth, storage, provider};