const musicSelect = document.querySelector("#play");
const play1 = document.querySelector("#play1");
const song = document.querySelector("#song");
const range = document.querySelector("#range");

const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward")
let count = 0;

song.onloadmetadata = () => {
    range.max = song.duration;
    range.value = song.currentTime;
}
// song.onload = ()=>{
//     song.pause();
// }
musicSelect.addEventListener("click", () => {
    if (count == 0) {
        song.play();
        play1.classList.remove("ri-play-large-fill");
        play1.classList.add("ri-pause-fill");
        count = 1;
    } else {
        song.pause();
        play1.classList.remove("ri-pause-fill");
        play1.classList.add("ri-play-large-fill");
        count = 0
    }

})

if(song.play()) {
    setInterval(() => {
        range.value = song.currentTime;
    }, 500)
}

range.onchange = () => {
    song.play();
    song.currentTime = range.value;
    play1.classList.add("ri-pause-fill");
    play1.classList.remove("ri-play-large-fill");
}


//! backward
backward.addEventListener("click", () => {
    song.currentTime -= 10;
    if (song.currentTime < 0) {
        song.currentTime = 0;
    }
    range.value = song.currentTime;
})

//! farward

forward.addEventListener("click",()=>{
    song.currentTime += 10;
    if(song.currentTime > song.duration){
        song.currentTime = song.duration
    }
    range.value = song.currentTime;
})