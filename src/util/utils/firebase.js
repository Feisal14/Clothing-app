import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
  
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  arrayUnion,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlvDFqXt0J0P4oEPeDURbxfUIL3ky69fQ",
  authDomain: "clothing-king.firebaseapp.com",
  projectId: "clothing-king",
  storageBucket: "clothing-king.appspot.com",
  messagingSenderId: "973831993255",
  appId: "1:973831993255:web:b146315942094884476882",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  
  

  return await createUserWithEmailAndPassword(auth, email, password);
};


export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  
  

  return await signInAuthWithEmailAndPassword(auth, email, password);
};
