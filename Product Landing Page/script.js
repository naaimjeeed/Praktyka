const navbar = document.getElementById("nav-bar");
const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerMenu.addEventListener("click", () =>{
    navbar.classList.toggle("active");
});

