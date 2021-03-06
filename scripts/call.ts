import mediaPlayer from "./mediaPlayer" 
import autoPlay from "./plugins/autoPlay"
import autoPause from "./plugins/AutoPause"
import Ads from "./plugins/Ads";
//como estamos en TypeScript al importar los archivos colocar la extensión .ts no es necesario

const video = document.querySelector("video");//A querySelector debemos de pasarle un selector (que interactua con el dom) como en este momento en el html solo tenemos una etiqueta video podemos parar el selector video solamente
const button: HTMLElement = document.querySelector("#btn_play");//lo mismo que anteriormente ya que en este momento tenemos un solo botón
const btn_Mute: HTMLElement = document.querySelector("#btn_mute");
const player = new mediaPlayer({
    parametro: video,
    plugins: [new autoPlay(), new autoPause(), new Ads() ],
});
//new autoPlay()] });//pasamos un objeto de configuracion, plaer es un nuevo elemento de mi clase mediaPlayer y contiene todos los métodos y propiedades de la misma
button.onclick = () => player.play();
button.onclick = () => player.togglePlay();
btn_Mute.onclick = () => {
    if(player.media.muted) {
        player.unmute();
    } else {
        player.mute();
    }
}
//btn_Mute.onclick = () => alert("Mute mrk");
//servises Workers
if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(error => {
        console.error(error.message)
    })
}