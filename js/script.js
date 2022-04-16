let audioElement = new Audio('../songs/1.mp3');
// audioElement.play();
let playButton = document.getElementById("play");
let songProgress = document.getElementById("progressBar");

// controlling the song progress bar by using the mathematical formula
audioElement.addEventListener("timeupdate", () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    songProgress.value = progress;
});

// changing the song currentTime throught changing the progressbar
songProgress.addEventListener("change", () => {
    audioElement.currentTime = (songProgress.value * audioElement.duration) / 100;
})

// handling the play and pause of song
playButton.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        playButton.classList.remove("fa-play-circle");
        playButton.classList.add("fa-pause-circle");
        document.getElementById("gif").style.opacity = 1;
        document.getElementById("unmute").style.display = "inline";
        document.getElementById("volume").style.opacity = 1;
    } else {
        audioElement.pause();
        playButton.classList.remove("fa-pause-circle");
        playButton.classList.add("fa-play-circle");
        document.getElementById("gif").style.opacity = 0;

    }
});

let songs = [
    { songName: "Aaj Phir Tum Pe - By Arijit Singh", filePath: "../songs/1.mp3", coverPath: "../images/cover1.jpg" },
    { songName: "Ek Ladki Ko Dekha.. - By Darshan", filePath: "../2.mp3", coverPath: "../images/cover2.jpg" },
    { songName: "Gulabi Ankhen jo teri-By Rafi", filePath: "../songs/3.mp3", coverPath: "../images/cover3.jpg" },
    { songName: "kabira Man Ja- By Arijit Singh", filePath: "../song/4.mp3", coverPath: "../images/cover4.jpg" },
    { songName: "Katu Kaise Rehta-By Jubin Nautiyal.", filePath: "../songs/5.mp3", coverPath: "../images/cover5.jpg" },
    { songName: "khamoshiyan By Arijit Singh", filePath: "../songs/6.mp3", coverPath: "../images/cover6.jpg" },
    { songName: "Naina Re - By Himesh Reshammiya", filePath: "../songs/7.mp3", coverPath: "../images/cover7.jpg" },
    { songName: "Naina - Khubsurat", filePath: "../songs/8.mp3", coverPath: "../images/cover3.jpg" },
    { songName: "O Dilbar Yaara - Stebin Ben", filePath: "../songs/9.mp3", coverPath: "../images/cover9.jpg" },
    { songName: "Rat bhar - Heropanti", filePath: "../songs/10.mp3", coverPath: "../images/cover6.jpg" },
    { songName: "Sajan Sajan Ishq - By Jaspinder", filePath: "../songs/11.mp3", coverPath: "../images/cover11.jfif" },
    { songName: "Subhanallah - Yeh jawani ha Dewani", filePath: "../songs/12.mp3", coverPath: "../images/cover12.jfif" }
]

let songItems = Array.from(document.getElementsByClassName("songItem"));
songItems.forEach((element, i) => {
    console.log("my name is muhamamd nouman");
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    // element.getElementsByClassName("timeStamp")[0].getElementsByClassName("time")[0].innerText = (songs[i].filePath).duration;
});

let songItemsPlay = Array.from(document.getElementsByClassName("songItemPlay"));

function makeAllplay() {
    songItemsPlay.forEach(element => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    });
}

//changing he song name at the progress bar
var songNameAtProgressBar = document.getElementById("songname");
songNameAtProgressBar.innerText = "Aaj Phir Tum Pe - By Arijit Singh";

// this variable will provide help specially in changing song previous or next 
var songIndex = 1;

songItemsPlay.forEach((element) => {
    element.addEventListener("click", (e) => {
        songIndex = parseInt(e.target.id);
        // songIndex = (e.target.id);
        console.log(songIndex)
        makeAllplay();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `../songs/${songIndex}.mp3`;

        audioElement.currentTime = 0;
        audioElement.play();
        playButton.classList.remove("fa-play-circle");
        playButton.classList.add("fa-pause-circle");
        document.getElementById("gif").style.opacity = 1;
        songNameAtProgressBar.innerText = songs[songIndex - 1].songName;
        document.getElementById("unmute").style.display = "inline";
        document.getElementById("volume").style.opacity = 1;
        document.getElementById("bottom_section").style.display = "block";


    })
});

// muting the song by clicking the mute button
document.getElementById("unmute").addEventListener("click", () => {
    if (audioElement.muted != true) {
        audioElement.muted = true;
    }
    document.getElementById("unmute").style.display = "none";
    document.getElementById("mute").style.display = "inline";
});

//unmuting the song by clicking the unmute button
document.getElementById("mute").addEventListener("click", () => {
    if (audioElement.muted == true) {
        audioElement.muted = false;
    }
    document.getElementById("mute").style.display = "none";
    document.getElementById("unmute").style.display = "inline";
});

// controlling the volume of song
let changeVolume = document.getElementById("volume");
// initializing the song with full volume that's why we set the first value 100
changeVolume.value = 100;
changeVolume.addEventListener("change", () => {
    audioElement.volume = changeVolume.value / 100;
});

// run previous song
document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 1) {
        songIndex = songs.length;
    } else {
        songIndex = songIndex - 1;
    }
    audioElement.src = `../songs/${songIndex}.mp3`;

    audioElement.currentTime = 0;
    audioElement.play();
    playButton.classList.remove("fa-play-circle");
    playButton.classList.add("fa-pause-circle");
    document.getElementById("gif").style.opacity = 1;
    songNameAtProgressBar.innerText = songs[songIndex - 1].songName;
    document.getElementById("unmute").style.display = "inline";
    document.getElementById("volume").style.opacity = 1;
});

// run forward song
document.getElementById("forward").addEventListener("click", () => {
    if (songIndex >= songs.length) {
        songIndex = 0;
    } else {
        songIndex = songIndex + 1;
    }
    audioElement.src = `../songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    playButton.classList.remove("fa-play-circle");
    playButton.classList.add("fa-pause-circle");
    document.getElementById("gif").style.opacity = 1;
    songNameAtProgressBar.innerText = songs[songIndex - 1].songName;
    document.getElementById("unmute").style.display = "inline";
    document.getElementById("volume").style.opacity = 1;
});

// diappearing the bottom and pause the song when cross button is clicked in the bottom section
document.getElementById("cross_bottom").addEventListener("click", () => {
    audioElement.pause();
    document.getElementById("bottom_section").style.display = "none";
})