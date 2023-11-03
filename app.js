// Simulated user data storage (in-memory)
const users = {};

// Registration form submission
document.getElementById('registration-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    if (email && password) {
        if (users[email]) {
            alert('User already exists.');
        } else {
            users[email] = password;
            alert('Registration successful.');
        }
    } else {
        alert('Invalid data.');
    }
});

// Login form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        if (users[email] === password) {
            alert('Login successful.');
        } else {
            alert('Invalid email or password.');
        }
    } else {
        alert('Invalid data.');
    }
});
