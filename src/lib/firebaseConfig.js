import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABsmFtOgk1Ld4J5T2SaMOBtDE6-lpAJG0",
  authDomain: "fir-login-tutorial-c27b9.firebaseapp.com",
  projectId: "fir-login-tutorial-c27b9",
  storageBucket: "fir-login-tutorial-c27b9.appspot.com",
  messagingSenderId: "666046427098",
  appId: "1:666046427098:web:554ddc8d2358b429e2dae3",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
