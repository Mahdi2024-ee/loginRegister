let goToLogin = document.getElementById("goToLogin");
let goToRegister = document.getElementById("goToRegister");

let registerForm = document.getElementById("registerForm");
let loginForm = document.getElementById("loginForm");

let authCard = document.getElementById("authCard");


// Register → Login

goToLogin.addEventListener("click", function () {

    authCard.classList.add("to-login");


    setTimeout(function () {

        registerForm.style.display = "none";

        loginForm.style.display = "block";

        authCard.classList.remove("to-login");

    }, 750);

});


// Login → Register

goToRegister.addEventListener("click", function () {

    authCard.classList.add("to-register");


    setTimeout(function () {

        loginForm.style.display = "none";

        registerForm.style.display = "block";

        authCard.classList.remove("to-register");

    }, 750);

});