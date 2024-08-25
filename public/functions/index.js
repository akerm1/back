const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.getFirebaseConfig = functions.https.onRequest((req, res) => {
  res.json({
    apiKey: "AIzaSyBNTDHR67L48F1nPReRs2dSoQ-PxgNKWYM",
    authDomain: "login2-d485e.firebaseapp.com",
    projectId: "login2-d485e",
    storageBucket: "login2-d485e.appspot.com",
    messagingSenderId: "602998933832",
    appId: "1:602998933832:web:a397944522901f3c12cb7d"
  });
});
