const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } = require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyC1KApdTOCrWAaQ1EDsh4CLfFslPzakSFk",
    authDomain: "voyllar-a872f.firebaseapp.com",
    projectId: "voyllar-a872f",
    storageBucket: "voyllar-a872f.appspot.com",
    messagingSenderId: "112983014466",
    appId: "1:112983014466:web:f724d2566b6a0f7f5a01db"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

exports.handler = async (event) => {
    const { action, email, password } = JSON.parse(event.body);

    try {
        if (action === 'signup') {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return { statusCode: 200, body: JSON.stringify({ success: true, message: 'User signed up' }) };
        } else if (action === 'signin') {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return { statusCode: 200, body: JSON.stringify({ success: true, message: 'User signed in' }) };
        } else if (action === 'resetPassword') {
            await sendPasswordResetEmail(auth, email);
            return { statusCode: 200, body: JSON.stringify({ success: true, message: 'Password reset email sent' }) };
        }
    } catch (error) {
        return { statusCode: 400, body: JSON.stringify({ success: false, message: error.message }) };
    }
};
