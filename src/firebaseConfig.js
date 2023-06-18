import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATGlKQZYCll_X_JWpL4DMsCJ3yZ8GVKA8",
  authDomain: "valencia-informa.firebaseapp.com",
  projectId: "valencia-informa",
  storageBucket: "valencia-informa.appspot.com",
  messagingSenderId: "604731214017",
  appId: "1:604731214017:web:f6d12509bbf85f1c842c40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app); //Bases de Datos

const auth = getAuth(app)
const provider = new GoogleAuthProvider();


export {auth,provider,db};