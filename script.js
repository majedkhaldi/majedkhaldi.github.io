var majed = document.querySelector(".hiddenn");
var opacity = 0;

function showw() {
    if (opacity < 1) {
        opacity += 0.02;
        majed.style.opacity = opacity;
    }
}
setInterval(showw, 60);
