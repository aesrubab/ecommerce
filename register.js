document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById("registerForm");
    
    registerForm.addEventListener("submit", function(event) {
      event.preventDefault();  
  
      
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;
      const passwordConfirm = document.getElementById("registerPasswordConfirm").value;
  

      document.getElementById("registerMessage").textContent = "";
  
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(email)) {
        document.getElementById("registerMessage").textContent = "Please enter a valid email";
        document.getElementById("registerMessage").classList.add("text-red");
        return;
      }
  
      if (password.length < 8) {
        document.getElementById("registerMessage").textContent = "Password must be at least 8 characters long";
        document.getElementById("registerMessage").classList.add("text-red");
        return;
      }
  
      if (password !== passwordConfirm) {
        document.getElementById("registerMessage").textContent = "Please enter a valid password";
        document.getElementById("registerMessage").classList.add("text-red");
        return;
      }
  
      document.getElementById("registerMessage").textContent = "Succesfully";
      document.getElementById("registerMessage").classList.remove("text-red");
      document.getElementById("registerMessage").classList.add("text-green");
  
    });
  });
  