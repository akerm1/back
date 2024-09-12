// Import Firebase modules as a module
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1KApdTOCrWAaQ1EDsh4CLfFslPzakSFk",
  authDomain: "voyllar-a872f.firebaseapp.com",
  projectId: "voyllar-a872f",
  storageBucket: "voyllar-a872f.appspot.com",
  messagingSenderId: "112983014466",
  appId: "1:112983014466:web:f724d2566b6a0f7f5a01db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
  const profileCircle = document.getElementById('profileCircle');
  const signInButton = document.getElementById('signbtn');

  // Firebase auth state change
  onAuthStateChanged(auth, (user) => {
    if (user) {
      profileCircle.style.display = 'flex'; // Show profile circle
      signInButton.classList.add('hidden'); // Hide sign-in button
    } else {
      profileCircle.style.display = 'none'; // Hide profile circle
      signInButton.classList.remove('hidden'); // Show sign-in button
    }
  });
});

// Log to confirm the script is loaded
console.log("Frontend script loaded.");
