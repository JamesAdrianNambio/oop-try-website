function validateLogin() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (email === '' || password === '') {
        alert("Please fill in both email and password.");
        return false;
    }

    alert("Login successful!");
}

function validateSignUp() {
    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    if (username === '' || email === '' || password === '') {
        alert("Please fill in all fields: username, email, and password.");
        return false;
    }

    alert("Sign-Up successful!");
}

function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    const isLoginVisible = loginForm.style.display !== "none";

    loginForm.style.display = isLoginVisible ? "none" : "block";
    signupForm.style.display = isLoginVisible ? "block" : "none";
}
