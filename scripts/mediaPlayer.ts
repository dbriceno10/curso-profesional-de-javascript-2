class mediaPlayer {
    media: HTMLMediaElement//La etiqueta video está en uso eso representa un html video element, heredan des esta clase nativa de html
    plugins: Array<any>;
    container: HTMLElement

    constructor(configurar) {
        this.media = configurar.parametro;
        this.plugins = configurar.plugins || []; //En el array vació vamos a pasar todos nuestros plugins, o carácterísticas nuevas que vamos a estar añadiendo al programa
        this.initPlayer()
        this.initPlugins();
    }

    initPlayer() {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    
    private initPlugins() {
        this.plugins.forEach(plugins => {
            plugins.run(this);
        });
    }

    play() {
        this.media.play();
    }

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

    mute() {
        this.media.muted = true;
    }

    unmute() {
        this.media.muted = false;
    }

}

export default mediaPlayer