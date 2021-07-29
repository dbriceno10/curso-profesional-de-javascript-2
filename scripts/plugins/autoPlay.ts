import mediaPlayer from "../mediaPlayer";

class autoPlay {
    constructor() { }
    run(player: mediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true;


            // PaymentRequest.muted(true) esto no, lo set no se llaman como a una función
            //player.muted = true// se le asigna un valor
        }
        player.play();

    }
}
export default autoPlay;