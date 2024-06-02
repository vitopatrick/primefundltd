import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWyXmOk_kRV6On04p3zjbkiE2T2X-rpUE",
  authDomain: "primefund-bc908.firebaseapp.com",
  projectId: "primefund-bc908",
  storageBucket: "primefund-bc908.appspot.com",
  messagingSenderId: "95309506946",
  appId: "1:95309506946:web:4cdedfaf9480b8e472079b",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
