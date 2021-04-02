import mediaPlayer from "./mediaPlayer.js" //Importamos para acá la función mediaPlayer
import autoPlay from "./plugins/autoPlay.js"

const video = document.querySelector("video");//A querySelector debemos de pasarle un selector (que interactua con el dom) como en este momento en el html solo tenemos una etiqueta video podemos parar el selector video solamente
const button = document.querySelector("#btn_play");//lo mismo que anteriormente ya que en este momento tenemos un solo botón
const btn_Mute = document.querySelector("#btn_mute");
const player = new mediaPlayer({parametro: video, plugins: [//new autoPlay()] });//pasamos un objeto de configuracion, plaer es un nuevo elemento de mi clase mediaPlayer y contiene todos los métodos y propiedades de la misma
] });
button.onclick = () => player.play();
button.onclick = () => player.togglePlay();
btn_Mute.onclick = () => {
    if(player.miVid.muted === true) {
        player.unmute();
    } else {
        player.mute();
    }
}
//btn_Mute.onclick = () => alert("Mute mrk");