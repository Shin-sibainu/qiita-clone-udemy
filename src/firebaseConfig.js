import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfasuXH6Vl81O6hHn2gYYxYoPIQgzewkA",
  authDomain: "fir-blog-tutorial-330ca.firebaseapp.com",
  projectId: "fir-blog-tutorial-330ca",
  storageBucket: "fir-blog-tutorial-330ca.appspot.com",
  messagingSenderId: "818974013384",
  appId: "1:818974013384:web:2980c0a6e8e79ae99732fd",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
