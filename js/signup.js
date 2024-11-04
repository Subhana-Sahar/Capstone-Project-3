document.getElementById("SignupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("SignupName").value.trim();
    const email = document.getElementById("SignupEmail").value.trim();
    const password = document.getElementById("SignupPassword").value.trim();

    const userData = {
      name: name,
      email: email,
      password: password
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Sign Up successfully!");
  });
