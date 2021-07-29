import mediaPlayer from "../mediaPlayer";

class autoPause {
    //threshold es una propiedad privada, en ts, eso perite que una función u objeto que importe esta función pueda leer este valor
    private threshold: number
    player: mediaPlayer //Para que ts considere mediaPlayer como un tipo, la misma debe estar declarada con la sintaxis de las clases

    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }

    run(player) {
        this.player = player;

        const observer = new IntersectionObserver(this.handleIntersection, {
        threshold: this.threshold,
        });

        observer.observe(this.player.media);

        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }
    //Cambiamos el tipo de dato que va a recibir el intersection observer, un arreglo llamado IntersectionObserverEntry
    private handleIntersection(entries: IntersectionObserverEntry []) {
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold;

        if (isVisible) {
        this.player.play();
        } else {
        this.player.pause();
        }
    }
    private handleVisibilityChange() {
        const isVisible = document.visibilityState === "visible"
        if(isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }
}

export default autoPause;
