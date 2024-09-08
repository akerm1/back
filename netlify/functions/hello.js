// Importing Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNTDHR67L48F1nPReRs2dSoQ-PxgNKWYM",
  authDomain: "login2-d485e.firebaseapp.com",
  projectId: "login2-d485e",
  storageBucket: "login2-d485e.appspot.com",
  messagingSenderId: "602998933832",
  appId: "1:602998933832:web:a397944522901f3c12cb7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

exports.handler = async (event) => {
  if (event.httpMethod === "POST") {
    const { action, email, password } = JSON.parse(event.body);

    try {
      if (action === "signUp") {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return {
          statusCode: 200,
          body: JSON.stringify({ message: 'Sign up successful', user: userCredential.user }),
        };
      } else if (action === "signIn") {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return {
          statusCode: 200,
          body: JSON.stringify({ message: 'Sign in successful', user: userCredential.user }),
        };
      } else if (action === "forgotPassword") {
        await sendPasswordResetEmail(auth, email);
        return {
          statusCode: 200,
          body: JSON.stringify({ message: 'Password reset email sent' }),
        };
      }
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: error.message }),
      };
    }
  }
  return {
    statusCode: 405,
    body: JSON.stringify({ message: 'Method Not Allowed' }),
  };
};
