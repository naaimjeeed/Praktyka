const navbar = document.getElementById("nav-bar");
const hamburgerMenu = document.getElementById("hamburger-menu");
const header = document.getElementById("header");
const signIn = document.getElementById("sign-in");

hamburgerMenu.addEventListener("click", () =>{
    navbar.classList.toggle("active");
    header.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

signIn.addEventListener("click", () => {
    window.location.href = "#main-email";
})