const hamburger = $('#hamburger');
const navul = $('#menu');

//Function for toggling nav menu in mobile view
hamburger.on('click', function() {
    navul.toggleClass("show")
    hamburger.toggleClass('open')
})

//Function for button to scroll down to projects
$('.header-button').on('click', function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('#projects').offset().top
    }, 800)
})

window.onscroll = function() {displayScrollButton()};

//Function for hiding and showing scroll-top button
function displayScrollButton() {
    if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
        $('#scroll-top').css('right', '10px')
    } else {
        $('#scroll-top').css('right', '-100px')
    }
}

//Function for button to scroll to top
$('#scroll-top').on('click', function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('#top').offset().top
    }, 800)
})

//Function for toggling CV dropdown menu
$('.dropdown').hover(function() {
    $('.dropdown-content').hide().slideToggle(300);
}, function() {
    $('.dropdown-content').show().slideToggle(300);
})

