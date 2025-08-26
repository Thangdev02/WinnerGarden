// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAZ2PaSSmaG0Uv3y5G0t46nhttme2AplRQ",
  authDomain: "winner-garden.firebaseapp.com",
  projectId: "winner-garden",
  storageBucket: "winner-garden.appspot.com", // ✅ Sửa lại cho đúng
  messagingSenderId: "971292747204",
  appId: "1:971292747204:web:5e3c020ff8b7b0584f3091",
  measurementId: "G-QLZX1LYGN5"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user; // user có email, displayName, photoURL
  } catch (error) {
    console.error("Google login error:", error);
    throw error;
  }
};
