 // button.onclick = () => video.play();
//video.play(); solamente es una mala práctica, no se debe hacer que el video se reproduzca de forma automática

//TS nos da la opción de convertir a la sintaxis de clases automáticamente
class mediaPlayer {
    constructor(configurar) {
        this.media = configurar.parametro;
        this.plugins = configurar.plugins || []; //En el array vació vamos a pasar todos nuestros plugins, o carácterísticas nuevas que vamos a estar añadiendo al programa
        this.initPlugins();
    }
    //mediaPlayer.media esto ses equivalente a lo de arriba
    play() {
        //video.play();//Aquí el video está embebido en la clase y eso no es práctico ni reutilizable
        this.media.play();
    }
    //const player = new mediaPlayer();
    pause() {
        this.media.pause();
    }
    togglePlay() {
        if (this.media.paused) {
            this.media.play();
        } else {
            this.media.pause();
        }
    }
    initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            }
        };
        this.plugins.forEach(plugins => {
            plugins.run(this);
        });
    }
    unmute() {
        this.media.muted = false;
    }
    mute() {
        this.media.muted = true;
    }
}






// mediaPlayer.prototype.muteSound = function() {
//     if(this.media.muted === true) {
//         this.media.unmute();
//     } else {
//         this.media.mute();
//     }
// }


export default mediaPlayer //Tomamos la función mediaPlayer y la exportamos