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





// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll(".media> img");
var modalImg = document.getElementById("img01");

for (let i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
    modal.style.display = "none";
    console.log("close");
}

