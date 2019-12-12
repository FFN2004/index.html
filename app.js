const hamburger = document.querySelector(".menu");
const navLinks = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("opened");
    console.log("hello")
});
