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
    }