import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCseX_tkuT137StDSjBdWzZZqTHWdZHVkA",
  authDomain: "creating-login-registration.firebaseapp.com",
  projectId: "creating-login-registration",
  storageBucket: "creating-login-registration.firebasestorage.app",
  messagingSenderId: "705986984807",
  appId: "1:705986984807:web:f99c18a15f99265ef28dc2",
  measurementId: "G-NQVSHD5YKD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
