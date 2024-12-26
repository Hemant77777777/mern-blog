// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-2ee5f.firebaseapp.com",
  projectId: "mern-blog-app-2ee5f",
  storageBucket: "mern-blog-app-2ee5f.firebasestorage.app",
  messagingSenderId: "257276826912",
  appId: "1:257276826912:web:69c81a36be2da2c8cdb345"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

