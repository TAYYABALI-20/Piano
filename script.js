let playButton = document.getElementById('play-button');

playButton.addEventListener('click', function () {

    playButton.classList.add('play');

    var audio = document.getElementById('background-music');

    setTimeout(function () {
        audio.play().catch(function (error) {
            console.error("Audio play failed:", error);
        });
    }, 1000);

});