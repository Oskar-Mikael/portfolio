const hamburger = $('#hamburger');
const navul = $('#menu');

//Function for toggling nav menu in mobile view
hamburger.on('click', () => {
    navul.toggleClass("show")
    hamburger.toggleClass('open')
})

//Function for button to scroll down to projects
$('.header-button').on('click', () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('#projects').offset().top
    }, 800)
})

window.onscroll = () => { displayScrollButton() };

//Function for hiding and showing scroll-top button
function displayScrollButton() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        $('#scroll-top').css('right', '10px')
    } else {
        $('#scroll-top').css('right', '-100px')
    }
}

//Function for button to scroll to top
$('#scroll-top').on('click', () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('#top').offset().top
    }, 800)
})

//Function for toggling CV dropdown menu
$('.dropdown').on('click', () => {
    if ($('.dropdown-content').css('display') == 'none') {

        $('.dropdown-content').hide().slideToggle(300);
        $('.dropdown-arrow').css('transform', 'rotate(180deg)');

    } else {

        $('.dropdown-content').show().slideToggle(300);
        $('.dropdown-arrow').css('transform', 'rotate(0deg)');
    }
})

$(document).click( () => {
    $('.dropdown-content').hide().slideUp(300);
    $('.dropdown-arrow').css('transform', 'rotate(0deg)');
})

$('.dropdown').click( (e) => {
    e.stopPropagation();
})

// $(document).click((e) => {
//     if ($('.dropdown') !== e.target && !$('.dropdown').has(e.target).length) {
//         $('.dropdown-content').hide().slideUp(300);
//     }
// })


//Function for contact form AJAX
$('.contact-form').submit(() => {
    alert('Your message has been sent, thank you!')
})
