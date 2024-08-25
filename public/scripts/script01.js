document.addEventListener('DOMContentLoaded', async () => {
  const profileCircle = document.getElementById('profileCircle');
  const signInButton = document.getElementById('signbtn');

  // Fetch Firebase config from server
  const response = await fetch('/getFirebaseConfig');
  const firebaseConfig = await response.json();

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

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

console.log("Script loaded");
