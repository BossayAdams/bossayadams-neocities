var coll = document.getElementsByClassName("collapsible");
var media = document.getElementsByClassName("media");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }

        for (let i = 0; i < media.length; i++) {
            media[i].pause();
        }
    });
}
