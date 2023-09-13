const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("playPauseButton");
const stopButton = document.getElementById("stopButton");

playPauseButton.addEventListener("click", () => {
	if (audio.paused) {
		audio.play();
		playPauseButton.textContent = "Pause";
	} else {
		audio.pause();
		playPauseButton.textContent = "Play";
	}
});

stopButton.addEventListener("click", () => {
	audio.pause();
	audio.currentTime = 0;
	playPauseButton.textContent = "Play";
});
