const video = document.querySelector("video");
const button = document.querySelector("button");

class mediaPlayer {
    constructor(configurar) { 
        this.configurar = configurar;
    };
    play() {
        video.play();
    };
    pause() {
        video.pause();
    };
};

const player = new mediaPlayer();

const estado = () => {
    if(video.paused === false) {
        player.pause();
    } else {
        player.play();
    }
}

// button.onclick = () => estado();
// const toggle = () => {
//     video.paused === false ? player.pause() : player.play();
// };

// button.onclick = () => toggle();