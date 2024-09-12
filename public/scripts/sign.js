// DOM Elements
const container = document.getElementById('container');
const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const signInSpinner = document.getElementById('signInSpinner');
const signUpSpinner = document.getElementById('signUpSpinner');
const signInStatus = document.getElementById('signInStatus');
const signUpStatus = document.getElementById('signUpStatus');
const forgotPasswordLink = document.getElementById('forgotPassword');

// Toggle forms
signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

// Sign up form submission
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    signUpSpinner.style.display = 'block'; // Show spinner

    fetch('/.netlify/functions/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'signup', email, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            signUpStatus.textContent = 'Sign up successful';
            signUpStatus.style.color = 'green';
            setTimeout(() => {
                container.classList.remove("right-panel-active");
                signUpSpinner.style.display = 'none'; // Hide spinner
            }, 1000);
        } else {
            signUpStatus.textContent = 'Error: ' + data.message;
            signUpStatus.style.color = 'red';
            signUpSpinner.style.display = 'none';
        }
    })
    .catch(error => console.error('Error:', error));
});

// Sign in form submission
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    signInSpinner.style.display = 'block'; // Show spinner

    fetch('/.netlify/functions/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'signin', email, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            signInStatus.textContent = 'Sign in successful';
            signInStatus.style.color = 'green';
            setTimeout(() => {
                window.location.href = '../../index.html'; // Redirect
            }, 1000);
        } else {
            signInStatus.textContent = 'Sign in failed: ' + data.message;
            signInStatus.style.color = 'red';
            signInSpinner.style.display = 'none';
        }
    })
    .catch(error => console.error('Error:', error));
});

// Forgot Password
forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('signInEmail').value;

    fetch('/.netlify/functions/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'resetPassword', email }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            signInStatus.textContent = 'Password reset email sent. Check your inbox.';
            signInStatus.style.color = 'green';
        } else {
            signInStatus.textContent = 'Error: ' + data.message;
            signInStatus.style.color = 'red';
        }
        signInSpinner.style.display = 'none';
    })
    .catch(error => console.error('Error:', error));
});
