let audio = document.getElementById("audioPlayer");
let musicButton = document.getElementById("musicButton");
let isPlaying = false;

musicButton.addEventListener("click", function() {
  if (isPlaying) {
    audio.pause();
    musicButton.textContent = "♫";
  } else {
    audio.play();
    musicButton.textContent = "❚❚";
  }
  isPlaying = !isPlaying;
});
