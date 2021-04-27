 // button.onclick = () => video.play();
//video.play(); solamente es una mala práctica, no se debe hacer que el video se reproduzca de forma automática


function mediaPlayer(configurar) {//Media player, aunque esté declarada como una función en realidad es una clase, esta va a contener los métodos de la clase mediaPlayer
    this.media = configurar.parametro
    this.plugins = configurar.plugins || [];//En el array vació vamos a pasar todos nuestros plugins, o carácterísticas nuevas que vamos a estar añadiendo al programa
    this.initPlugins();
}
//mediaPlayer.media esto ses equivalente a lo de arriba

mediaPlayer.prototype.play = function() {
    //video.play();//Aquí el video está embebido en la clase y eso no es práctico ni reutilizable
    this.media.play();
}
//const player = new mediaPlayer();


mediaPlayer.prototype.pause = function() {
    this.media.pause();
}

mediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
        this.media.play();
    } else {
        this.media.pause();
    }
}

mediaPlayer.prototype.initPlugins = function() {
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted() {
            return this.media.muted
        },
        set muted(value) {
            this.media.muted = value
        }
    }
    this.plugins.forEach(plugins => {
        plugins.run(this);
    });
}

mediaPlayer.prototype.unmute = function() {
    this.media.muted = false;
}
mediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}



// mediaPlayer.prototype.muteSound = function() {
//     if(this.media.muted === true) {
//         this.media.unmute();
//     } else {
//         this.media.mute();
//     }
// }


export default mediaPlayer //Tomamos la función mediaPlayer y la exportamos