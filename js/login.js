document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault(); 
  
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    const savedUserData = JSON.parse(localStorage.getItem("userData"));
  
if (savedUserData && savedUserData.email === email && savedUserData.password === password) {
    alert("Login successfully!");
  } else {
    alert("Invalid Email or Password");
  }
});
