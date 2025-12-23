let sounds = [
  "music/28.mp3",
  "music/29.mp3",
  "music/30.mp3",
  "music/31.mp3",
  "music/32.mp3",
  "music/33.mp3",
  "music/34.mp3",
  "music/35.mp3",
  "music/36.mp3",
  "music/37.mp3",
  "music/38.mp3",
  "music/39.mp3"
];

let keys = document.querySelectorAll(".key");

function playSound(key) {
  let index = key.dataset.sound;
  let audio = new Audio(sounds[index]);
  audio.currentTime = 0;
  audio.play();

  key.classList.add("active");
  setTimeout(() => {
    key.classList.remove("active");
  }, 120);
}


keys.forEach(key => {
  key.addEventListener("click", () => playSound(key));
});


document.addEventListener("keydown", (e) => {
  let key = document.querySelector(`.key[data-key="${e.code}"]`);
  if (key) playSound(key);
});
