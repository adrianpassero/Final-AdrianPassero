import { initializeApp } from "firebase/app";
import { getFirestore }  from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "don-gato-94ee6.firebaseapp.com",
  projectId: "don-gato-94ee6",
  storageBucket: "don-gato-94ee6.appspot.com",
  messagingSenderId: "838748212616",
  appId: "1:838748212616:web:b24dba869e7201f4267e3d"
};

const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app)