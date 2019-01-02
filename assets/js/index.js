var typed = new Typed('#typed', {
    strings: ["Peter Parker", "Photographer"],
    typeSpeed: 100,
    backSpeed: 100,
    onComplete: (self) => {showCursor:false},
    
});


// Smooth Scrolling

$(document).ready(function () {
    $('.scroll').on('click', function () { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 1000 // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });
});


