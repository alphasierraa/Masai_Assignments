// Get references to form elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Function to validate the name input
function validateName() {
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
    }
}

// Function to validate the email input
function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
}

// Function to validate the password input
function validatePassword() {
    if (passwordInput.value.length < 8) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
}

// Attach event listeners for real-time validation
nameInput.addEventListener('input', validateName);
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('input', validateEmail);
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('input', validatePassword);
passwordInput.addEventListener('blur', validatePassword);

// Prevent form submission if there are errors
document.getElementById('registration-form').addEventListener('submit', function(event) {
    validateName();
    validateEmail();
    validatePassword();
    
    // Check if there are any error messages displayed
    if (nameError.style.display === 'block' ||
        emailError.style.display === 'block' ||
        passwordError.style.display === 'block') {
        event.preventDefault(); // Prevent form submission
    }
});
