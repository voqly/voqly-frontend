import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY || "demo-api-key";
const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "demo-auth-domain";
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID || "demo-project-id";
const appId = import.meta.env.VITE_FIREBASE_APP_ID || "demo-app-id";
const storageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "demo-storage-bucket";
const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "demo-messaging-sender-id";

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  appId,
  storageBucket,
  messagingSenderId,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const facebookProvider = new FacebookAuthProvider();


