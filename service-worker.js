//=====================================
// NOMBRE DEL CACHE
//=====================================

const CACHE_NAME = "bogota-explorando-v2";

//=====================================
// ARCHIVOS A GUARDAR
//=====================================

const urlsToCache = [

    "/",

    "index.html",

    "style.css",

    "app.js",

    "manifest.json",

    "icons/icon-192.png",

    "icons/icon-512.png",

    "imagenes/monserrate.png",

    "imagenes/museo_oro.png",

    "imagenes/plaza_bolivar.png",

    "imagenes/calle sombrillas.png",

    "imagenes/salida.jpg",

    "imagenes/entrada.jpg",

    "imagenes/Iglesia.jfif",

    "imagenes/plaza.jpg"


];

//=====================================
// INSTALACIÓN
//=====================================

self.addEventListener("install", (event)=>{

    console.log("Service Worker instalado");

    event.waitUntil(

        caches.open(CACHE_NAME)

        .then((cache)=>{

            console.log("Archivos almacenados");

            return cache.addAll(urlsToCache);

        })

    );

});

//=====================================
// FETCH
//=====================================

self.addEventListener("fetch", (event)=>{

    event.respondWith(

        caches.match(event.request)

        .then((response)=>{

            if(response){

                return response;

            }

            return fetch(event.request);

        })

    );

});

//=====================================
// NOTIFICACIONES PUSH
//=====================================

self.addEventListener("push", (event)=>{

    self.registration.showNotification(
        "Bogotá Explorando",
        {
            body: "Hay nuevos lugares turísticos para explorar."
        }
    );

});