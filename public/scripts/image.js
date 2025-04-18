var images = document.getElementsByClassName("zoom");

for (i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
        window.open(this.getAttribute("src"), '_blank');
    });
}
