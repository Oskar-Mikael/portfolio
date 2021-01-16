const hamburger = document.querySelector("#hamburger");
const navul = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
    navul.classList.toggle("show");
    hamburger.classList.toggle('open')
});
