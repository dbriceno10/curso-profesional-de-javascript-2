const version = "v1"
self.addEventListener("install", event => {
    event.waitUntil(precache())
})
self.addEventListener("fetch", event => {
    const request = event.request
    //get
    if(request.method !== "GET") {
        return
    }

    //buscar en cache
    event.respondWith(cachedResponse(request))

    //actualizar el chache
    event.waitUntil(updateCache(request))
})
//Caches parte del api del dom
async function precache() {
    //creando una instancia de caché
    const cache = await caches.open(version) //regresa una promesa
    //vamos a pasar una lista con todos nuestros recursos
    return cache.addAll([
        // "/",
        // "/index.html",
        // "/scripts/call.js",
        // "/scripts/mediaPlayer.js",
        // "/scripts/plugins/autoPlay.js",
        // "/scripts/plugins/AutoPause.js",
        // "/styles/style.css",
        // "/styles/normalize.css",
        // "/assets/Shaman_King_OP_2_Latino.mp4"
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open(version)
    //revisar si tenemos la constentación del response
    const response = await cache.match(request)//Ya está la respuesta? si es no regresa undefined
    return response || fetch(request)//si response es undefined responde con lo que viene de internet (usando el fetch)
}

async function updateCache(request) {
    const cache = await caches.open(version)
    const response = await fetch(request)
    return cache.put(request, response)
    // const response = await cache.match(request)
    // return response || fetch(request)
}