document.body.addEventListener('click', function() {
    var audio = document.getElementById("background-music");
    if (audio.paused) {
        audio.play();
    }
});
