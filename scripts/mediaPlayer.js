 // button.onclick = () => video.play();
//video.play(); solamente es una mala práctica, no se debe hacer que el video se reproduzca de forma automática


function mediaPlayer(configurar) {//Media player, aunque esté declarada como una función en realidad es una clase, esta va a contener los métodos de la clase mediaPlayer
    this.miVid = configurar.parametro
    this.plugins = configurar.plugins || [];//En el array vació vamos a pasar todos nuestros plugins, o carácterísticas nuevas que vamos a estar añadiendo al programa
    this.initPlugins();
}
//mediaPlayer.media esto ses equivalente a lo de arriba

mediaPlayer.prototype.play = function() {
    //video.play();//Aquí el video está embebido en la clase y eso no es práctico ni reutilizable
    this.miVid.play();
}
//const player = new mediaPlayer();


mediaPlayer.prototype.pause = function() {
    this.miVid.pause();
}

mediaPlayer.prototype.togglePlay = function() {
    if (this.miVid.paused) {
        this.miVid.play();
    } else {
        this.miVid.pause();
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
    this.miVid.muted = false;
}
mediaPlayer.prototype.mute = function() {
    this.miVid.muted = true;
}



// mediaPlayer.prototype.muteSound = function() {
//     if(this.miVid.muted === true) {
//         this.miVid.unmute();
//     } else {
//         this.miVid.mute();
//     }
// }


export default mediaPlayer //Tomamos la función mediaPlayer y la exportamos