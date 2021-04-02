function autoPlay() {}
autoPlay.prototype.run = function(player){
player.play();
player.mute();
}
export default autoPlay;