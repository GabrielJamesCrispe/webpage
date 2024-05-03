const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  
  const isLoginSuccessful = true; 

  if (isLoginSuccessful) {
   
    window.location.href = "index.html";
  } else {
    
    console.error('Login failed!');
  }
});


const loginForm = document.querySelector('.login_form form');
const signupForm = document.querySelector('.signup_form form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  if (true) {
    formContainer.classList.remove('show'); 
    window.location.href = "Profile.html"; 
  } else {
    
    console.error('Login failed!');
  }
});

signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  if (true) {
    formContainer.classList.remove('show'); 
    window.location.href = "index.html"; 
  } else {
    
    console.error('Signup failed!');
  }
});


