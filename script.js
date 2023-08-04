

const menuToggle = document.querySelector('.menu-toggle');
const bxMenu = document.querySelector('.bx-menu');
const bxX = document.querySelector('.bx-x');

const navBar = document.querySelector('.navbar');

// --- open menu ---

bxMenu.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-menu')){
        navBar.classList.add('show-navbar');
        bxMenu.classList.add('hide-bx');
        bxX.classList.add('show-bx');
    }
})

// --- close menu ---

bxX.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-x')){
        navBar.classList.remove('show-navbar');
        bxMenu.classList.remove('hide-bx');
        bxX.classList.remove('show-bx');
    }
})


// script.js

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const subscribeButton = document.getElementById("subscribeButton");
    const emailInput = document.getElementById("email-subscribe");
    const subscribeContainer = document.querySelector(".subscribe-container");
  
    subscribeButton.addEventListener("click", function() {
      const emailValue = emailInput.value.trim();
      const validationResultElement = document.createElement("p");
  
      if (isValidEmail(emailValue)) {
        validationResultElement.innerText = "Valid email address!";
        validationResultElement.style.color = "green";
      } else {
        validationResultElement.innerText = "Invalid email address!";
        validationResultElement.style.color = "red";
      }
  
      // Check if the validation result element already exists, if so, remove it before adding the new one.
      const existingValidationResult = document.querySelector(".validation-result");
      if (existingValidationResult) {
        subscribeContainer.removeChild(existingValidationResult);
      }
  
      validationResultElement.classList.add("validation-result");
      subscribeContainer.appendChild(validationResultElement);
    });
  });
  