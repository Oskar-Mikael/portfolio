const hamburger = $('#hamburger');
const navul = $('#menu');

hamburger.on('click', function() {
    navul.toggleClass("show")
    hamburger.toggleClass('open')
})

$('.header-button').on('click', function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('#projects').offset().top
    }, 800)
})

window.onscroll = function() {displayScrollButton()};

function displayScrollButton() {
    if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
        $('#scroll-top').css('right', '10px')
    } else {
        $('#scroll-top').css('right', '-100px')
    }
}

$('#scroll-top').on('click', function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('#top').offset().top
    }, 800)
})

$('.dropdown').hover(function() {
    $('.dropdown-content').hide().slideToggle(300);
}, function() {
    $('.dropdown-content').show().slideToggle(300);
})

