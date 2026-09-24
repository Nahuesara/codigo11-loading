// Function for getting random number between 1 and 3 for song choose

function getRandomSongNumber() {
    return random = Math.floor(Math.random() * 3) + 1;
  }
// Function for getting random number between 1 and 3 for song choose

// Function for setting a random song
  function setNewSong() {
  if (random == 1) {
    document.getElementById("loading").src = "song/song1.mp3";
    if (songname) songname.innerHTML = "Asketa & Natan Chaim - More [NCS Release]";
  }
  else if (random == 2) {
    document.getElementById("loading").src = "song/song2.mp3";
    if (songname) songname.innerHTML = "Akacia - Electric [NCS Release]";
  }
  else if (random == 3) {
    document.getElementById("loading").src = "song/song3.mp3";
    if (songname) songname.innerHTML = "Wiguez & Vizzen - Running Wild [NCS Release]";
  }

  }
// Function for setting a random song

// Function for random song select on page loaded
document.addEventListener("DOMContentLoaded", function () {
    // Volání funkcí pro výběr a nastavení náhodné písně
    var random = getRandomSongNumber();
    setNewSong(random);
  });
// Function for random song select page loaded

// Control de volumen con slider
var play = false;
var vid = document.getElementById("loading");
vid.volume = 0.2;

function paintVolumeSlider(slider) {
    if (!slider) return;
    var value = Number(slider.value || 0);
    slider.style.background = "linear-gradient(to right, #0084ff 0%, #0084ff " + value + "%, rgba(255,255,255,.14) " + value + "%, rgba(255,255,255,.14) 100%)";
}

function setVolumeFromSlider(value) {
    if (!vid) return;
    var normalized = Math.max(0, Math.min(100, Number(value))) / 100;
    vid.volume = normalized;
}

function syncSliderFromAudio() {
    var slider = document.getElementById("volumeSlider");
    if (!slider || !vid) return;
    slider.value = Math.round(vid.volume * 100);
    paintVolumeSlider(slider);
}

window.addEventListener('keyup', function(e) {
    if (e.which == 38) {
        vid.volume = Math.min(1, vid.volume + 0.05);
        syncSliderFromAudio();
    } else if (e.which == 40) {
        vid.volume = Math.max(0, vid.volume - 0.05);
        syncSliderFromAudio();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var slider = document.getElementById("volumeSlider");
    if (slider) {
        slider.value = Math.round(vid.volume * 100);
        paintVolumeSlider(slider);
        slider.addEventListener("input", function () {
            setVolumeFromSlider(this.value);
            paintVolumeSlider(this);
        });
    }
});
// Fin control de volumen


var mutetext = document.getElementById("text");
var songname = document.getElementById("songname");

window.addEventListener("keyup", function(event) {
    if (event.which == 37) { // ArrowLEFT
        if (document.getElementById("loading").src.endsWith("song2.mp3")) {
            document.getElementById("loading").src = "song/song1.mp3";
            if (songname) songname.innerHTML = "Asketa & Natan Chaim - More [NCS Release]";

        } else if (document.getElementById("loading").src.endsWith("song1.mp3")) {
            document.getElementById("loading").src = "song/song3.mp3";
            if (songname) songname.innerHTML = "Wiguez & Vizzen Ft. Maestro Chives - Running Wild (EH!DE Remix) [NCS Release]";

        } else if (document.getElementById("loading").src.endsWith("song3.mp3")) {
            document.getElementById("loading").src = "song/song2.mp3";
            if (songname) songname.innerHTML = "Akacia - Electric [NCS Release]";
        }
        document.getElementById("loading").play();
        if (mutetext) mutetext.innerHTML = "MUTE";
    }

    if (event.which == 39) { // ArrowRIGHT
        if (document.getElementById("loading").src.endsWith("song2.mp3")) {
            document.getElementById("loading").src = "song/song3.mp3";
            if (songname) songname.innerHTML = "Wiguez & Vizzen Ft. Maestro Chives - Running Wild (EH!DE Remix) [NCS Release]";

        } else if (document.getElementById("loading").src.endsWith("song3.mp3")) {
            document.getElementById("loading").src = "song/song1.mp3";
            if (songname) songname.innerHTML = "Asketa & Natan Chaim - More [NCS Release]";

        } else if (document.getElementById("loading").src.endsWith("song1.mp3")) {
            document.getElementById("loading").src = "song/song2.mp3";
            if (songname) songname.innerHTML = "Akacia - Electric [NCS Release]";

        }
        document.getElementById("loading").play();
        if (mutetext) mutetext.innerHTML = "MUTE";
    }
    
});


// Music is controlled with the volume buttons above.


//SHADED-TEXT - Function for switching words in loading animation

var shadedText = document.querySelector('.shaded-text');
var texts = ["JOINING SERVER", "PREPARING ASSETS", "ESTABLISHING CONNECTION"];
var currentText = 0;

setInterval(function() {
currentText = (currentText + 1) % texts.length;
shadedText.classList.remove('fade-out');
void shadedText.offsetWidth;
shadedText.classList.add('fade-out');
setTimeout(function() {
shadedText.textContent = texts[currentText];
}, 1000);
}, 4000);
//SHADED-TEXT - Function for switching words in loading animation

//PLACEHOLDER - Function for getting handoverdata from lua script
window.addEventListener('DOMContentLoaded', () => {
  if (window.nuiHandoverData && window.nuiHandoverData.serverAddress) { console.log(`You are connecting to ${window.nuiHandoverData.serverAddress}`); }

  // a thing to note is the use of innerText, not innerHTML: names are user input and could contain bad HTML!
  const np = document.querySelector('#namePlaceholder > span'); if (np && window.nuiHandoverData && window.nuiHandoverData.name) { np.innerText = window.nuiHandoverData.name; }
});
//PLACEHOLDER - Function for getting handoverdata from lua scrip

//RANDOMPHRASES - Phrases generated after your steamname
(function welcometext() {
    var welcomes = ['Begin your exciting new adventure.', 'Discover the wonders of your new city.', 'Open the door to a brand-new chapter.', 'Step into a world of new possibilities.', 'Embrace your fresh beginning.', ];
    var randomWelcome = Math.floor(Math.random() * welcomes.length);
    const wd = document.getElementById('welcomeDisplay'); if (wd) wd.innerHTML = welcomes[randomWelcome];
  })();
//RANDOMPHRASES - Phrases generated after your steamname
  

// Reintenta iniciar la musica en la primera interaccion del usuario si Chromium bloqueo el autoplay con sonido.
(function ensureLoadingMusic(){
  const audio = document.getElementById('loading');
  if (!audio) return;
  const tryPlay = () => {
    audio.play().catch(() => {});
  };
  document.addEventListener('DOMContentLoaded', tryPlay, {once:true});
  window.addEventListener('pointerdown', tryPlay, {once:true});
  window.addEventListener('keydown', tryPlay, {once:true});
  const slider = document.getElementById('volumeSlider');
  if (slider) slider.addEventListener('input', tryPlay, {once:true});
})();
