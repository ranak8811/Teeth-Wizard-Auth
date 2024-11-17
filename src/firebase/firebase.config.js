// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOE0YazXdmCssTx2xJhKgamBI82hKqo7w",
  authDomain: "travel-wizard-auth.firebaseapp.com",
  projectId: "travel-wizard-auth",
  storageBucket: "travel-wizard-auth.firebasestorage.app",
  messagingSenderId: "177707109572",
  appId: "1:177707109572:web:72587839180e27b2b84d91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
