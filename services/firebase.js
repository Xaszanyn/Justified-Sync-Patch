import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyByUSThPmduQS0-vvZj128DixCwZQzlIOE",
  authDomain: "rocket-crypto-app.firebaseapp.com",
  projectId: "rocket-crypto-app",
  storageBucket: "rocket-crypto-app.firebasestorage.app",
  messagingSenderId: "100773763046",
  appId: "1:100773763046:web:d94b0fa03851d193a96827",
});

const auth = getAuth(app);
const database = getFirestore(app);

//* Firebase ====================================================================================================

function set(document, id, value) {
  return setDoc(doc(database, document, id), value);
}

//* User ====================================================================================================

export function register(email, password, nick) {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (response) =>
      set("users", response.user.uid, { email, nick }).then(() => ({
        uid: response.user.uid,
        email,
        nick,
      }))
  );
}
