//your JS code here. If required.
 const sounds = ["sound1.mp3", "sound2.mp3", "sound3.mp3", "sound4.mp3"];

    const buttonsContainer = document.getElementById("buttons");
    let audios = [];

    // Create a button for each sound
    sounds.forEach(sound => {
      const btn = document.createElement("button");
      btn.classList.add("btn");
      btn.innerText = sound.replace(".mp3", ""); // button name without .mp3
      btn.addEventListener("click", () => playSound(sound));
      buttonsContainer.appendChild(btn);
    });

    // Create STOP button
    const stopBtn = document.createElement("button");
    stopBtn.classList.add("stop");
    stopBtn.innerText = "STOP";
    stopBtn.addEventListener("click", stopSounds);
    buttonsContainer.appendChild(stopBtn);

    // Play a selected sound
    function playSound(sound) {
      stopSounds(); // stop other sounds before playing new one
      const audio = new Audio(`sounds/${sound}`);
      audio.play();
      audios.push(audio);
    }

    // Stop all sounds
    function stopSounds() {
      audios.forEach(a => {
        a.pause();
        a.currentTime = 0;
      });
      audios = [];
    }// Use the required sound names (files are expected in ./sounds/)
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttons = document.getElementById('buttons');

// Build a play button for each sound
sounds.forEach((sound) => {
  // hidden audio element
  const audio = document.createElement('audio');
  audio.id = sound;
  audio.src = ./sounds/${sound}.mp3;
  audio.preload = 'auto';
  document.body.appendChild(audio);

  // visible button
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.textContent = sound;

  btn.addEventListener('click', () => {
    stopSounds();
    const el = document.getElementById(sound);
    el.currentTime = 0;
    const p = el.play();    
  });

  buttons.appendChild(btn);
});

// Stop button (DO NOT give it .btn so tests count 6 .btn only)
const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.textContent = 'stop';
stopBtn.addEventListener('click', stopSounds);
buttons.appendChild(stopBtn);

// Pause & reset all
function stopSounds() {
  sounds.forEach((sound) => {
    const el = document.getElementById(sound);
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  });
}