const hamburger = document.querySelector("#hamburger");
const navul = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
    navul.classList.toggle("show");
})

function showText(text) {
    document.querySelector(".project-img").innerHTML=text;
}

function hideText() {
    document.querySelector("project-img").innerHTML="";
}