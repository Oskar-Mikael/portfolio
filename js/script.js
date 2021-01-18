const hamburger = document.querySelector("#hamburger");
const navul = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
    navul.classList.toggle("show");
    hamburger.classList.toggle('open')
});

function smoothScroll(){
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
}

window.onscroll = function() {displayScrollButton()};

function displayScrollButton() {
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        document.querySelector("#scroll-top").style.right = "10px";
    } else {
        document.querySelector("#scroll-top").style.right = "-100px";
    }
}

function scrollToTop() {
    document.querySelector('#top').scrollIntoView({
        behavior: 'smooth'
    });
}