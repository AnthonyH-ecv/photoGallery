
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