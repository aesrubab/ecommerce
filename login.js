document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const loginButton = document.querySelector('button');
    
    function showError(input, message) {
      const errorSpan = document.createElement('span');
      errorSpan.classList.add('text-red', 'text-sm');
      errorSpan.textContent = message;
      input.classList.add('border-red');
      
      if (!input.parentElement.querySelector('.error-message')) {
        input.parentElement.appendChild(errorSpan);
      }
    }
  
    function clearErrors() {
      const errorMessages = document.querySelectorAll('.error-message');
      errorMessages.forEach(message => message.remove());
      
      emailInput.classList.remove('border-red-500');
      passwordInput.classList.remove('border-red-500');
    }
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();  
      
      clearErrors(); 
  
      let isValid = true;
  
      const email = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        showError(emailInput, 'Email is required');
        isValid = false;
      } else if (!emailPattern.test(email)) {
        showError(emailInput, 'Please enter a valid email');
        isValid = false;
      }
  
      const password = passwordInput.value.trim();
      if (!password) {
        showError(passwordInput, 'Password is required');
        isValid = false;
      } else if (password.length < 8) {
        showError(passwordInput, 'Password must be at least 8 characters long');
        isValid = false;
      }
  
      if (isValid) {
        alert('Succesfully');
      }
    });
  });
  