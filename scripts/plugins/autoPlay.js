function autoPlay() {}
autoPlay.prototype.run = function(player){
    if (!player.muted) {
        player.mute(true); //Esto funciona
        // PaymentRequest.muted(true) esto no, lo set no se llaman como a una función
        // player.muted = true// se le asigna un valor
    }
    player.play();
    
}
export default autoPlay;