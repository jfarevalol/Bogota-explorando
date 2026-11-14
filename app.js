//=====================================
// VARIABLES
//=====================================

let nombre = "Mario";
let edad = 40;
let ciudad = "Bogotá";
let carrera = "Ingeniería de Sistemas";
let universidad = "Universidad del Tolima";

//=====================================
// MOSTRAR VARIABLES
//=====================================

console.log(nombre);
console.log(edad);
console.log(ciudad);
console.log(carrera);
console.log(universidad);

//=====================================
// TIPOS DE DATOS
//=====================================

let activo = true;
let estatura = 1.75;

console.log(activo);
console.log(estatura);

//=====================================
// OPERADORES ARITMÉTICOS
//=====================================

let nota1 = 4.2;
let nota2 = 3.8;

let promedio = (nota1 + nota2) / 2;

console.log(promedio);

//=====================================
// OPERADORES RELACIONALES
//=====================================

console.log(promedio >= 3.0);
console.log(edad >= 18);
console.log(edad < 18);

//=====================================
// OBJETO BÁSICO
//=====================================

let estudiante = {

    nombre: "Mario",
    edad: 40,
    ciudad: "Bogotá"

};

console.log(estudiante);

console.log(estudiante.nombre);
console.log(estudiante.edad);
console.log(estudiante.ciudad);

//=====================================
// CLASE
//=====================================

class LugarTuristico {

    // Encapsulamiento
    #visitas = 0;

    constructor(nombre, direccion) {

        this.nombre = nombre;
        this.direccion = direccion;

    }

    mostrar() {

        console.log("Lugar turístico");
        console.log(this.nombre);
        console.log(this.direccion);

    }

}

//=====================================
// CREAR OBJETOS
//=====================================

let lugar1 = new LugarTuristico(
    "Monserrate",
    "Cerro Oriental"
);

let lugar2 = new LugarTuristico(
    "Museo del Oro",
    "Centro"
);

let lugar3 = new LugarTuristico(
    "Plaza Bolívar",
    "La Candelaria"
);

//=====================================
// MOSTRAR OBJETOS
//=====================================

console.log(lugar1);
console.log(lugar2);
console.log(lugar3);

//=====================================
// LLAMAR MÉTODOS
//=====================================

lugar1.mostrar();
lugar2.mostrar();
lugar3.mostrar();

//=====================================
// HERENCIA
//=====================================

class LugarHistorico extends LugarTuristico {

    constructor(nombre, direccion) {

        super(nombre, direccion);

    }

    // Polimorfismo
    mostrar() {

        console.log("Lugar histórico");
        console.log(this.nombre);
        console.log(this.direccion);

    }

}

//=====================================
// OBJETO DE LA CLASE HIJA
//=====================================

let museo = new LugarHistorico(
    "Museo del Oro",
    "Centro de Bogotá"
);

museo.mostrar();


//=====================================
// REGISTRAR SERVICE WORKER
//=====================================

if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("service-worker.js")

        .then(() => {

            console.log("Service Worker registrado correctamente");

        })

        .catch(() => {

            console.log("Error al registrar el Service Worker");

        });

}

//=====================================
// ARREGLO DE LUGARES TURÍSTICOS
//=====================================

let lugares = [
    {
        id: 1,
        nombre: "Monserrate",
        direccion: "Cerro de Monserrate, Bogotá",
        descripcion: "En la cima de los cerros orientales se encuentra el santuario de Monserrate. Desde allí se observa gran parte de Bogotá y se disfruta el paisaje de montaña que acompaña a la ciudad.",
        imagen: "imagenes/monserrate.png"
    },
    {
        id: 2,
        nombre: "Museo del Oro",
        direccion: "Centro de Bogotá",
        descripcion: "Sus salas exhiben piezas de orfebrería prehispánica y cuentan cómo distintos pueblos indígenas trabajaban el oro y otros materiales. La imagen muestra parte de su exposición iluminada.",
        imagen: "imagenes/museo_oro.png"
    },
    {
        id: 3,
        nombre: "Plaza Bolívar",
        direccion: "La Candelaria, centro de Bogotá",
        descripcion: "Esta plaza amplia reúne edificios históricos y es uno de los principales puntos de encuentro del centro de Bogotá. En la fotografía se destaca la Catedral Primada y su arquitectura de varias torres.",
        imagen: "imagenes/plaza_bolivar.png"
    },
    {
        id: 4,
        nombre: "Calle de las Sombrillas",
        direccion: "Barrio La Candelaria, centro histórico",
        descripcion: "Una calle peatonal llena de color, con sombrillas suspendidas sobre el recorrido y fachadas pintadas a ambos lados. Es un rincón llamativo para caminar y tomar fotografías en el centro histórico.",
        imagen: "imagenes/calle sombrillas.png"
    },
    {
        id: 5,
        nombre: "Calles de La Candelaria",
        direccion: "Centro histórico de Bogotá",
        descripcion: "Las calles empedradas y las casas de colores hacen parte del paisaje tradicional de La Candelaria. El recorrido permite apreciar murales, balcones y detalles de la arquitectura del barrio.",
        imagen: "imagenes/salida.jpg"
    },
    {
        id: 6,
        nombre: "La Candelaria de noche",
        direccion: "Centro histórico de Bogotá",
        descripcion: "Al anochecer, las luces decorativas y las fachadas antiguas crean un ambiente distinto en las calles del centro. La imagen muestra una calle estrecha con banderas y murales.",
        imagen: "imagenes/entrada.jpg"
    },
    {
        id: 7,
        nombre: "Capilla del centro histórico",
        direccion: "Barrio La Candelaria, Bogotá",
        descripcion: "La fotografía muestra una capilla de fachada blanca, techo de teja y una pequeña torre, rodeada por una plazoleta empedrada. Es una muestra de la arquitectura religiosa tradicional del centro.",
        imagen: "imagenes/Iglesia.jfif"
    },
    {
        id: 8,
        nombre: "Plazoleta del centro",
        direccion: "Centro histórico de Bogotá",
        descripcion: "Una plazoleta rodeada de construcciones coloridas, con una fuente en el centro y espacio para sentarse. La escena refleja los lugares de encuentro que forman parte de la vida cotidiana del centro.",
        imagen: "imagenes/plaza.jpg"
    }
];

//=====================================
// CONTENEDORES
//=====================================

const contenedor = document.getElementById("lugares");

const detalle = document.getElementById("detalle");

const buscador = document.querySelector(".busqueda input");


//=====================================
// MOSTRAR LUGARES
//=====================================

function mostrarLugares(lista){

    contenedor.innerHTML = "";

    lista.forEach((lugar)=>{

        contenedor.innerHTML += `

            <div class="tarjeta">

                <img src="${lugar.imagen}" alt="${lugar.nombre}">

                <h3>${lugar.nombre}</h3>

                <p>${lugar.descripcion}</p>

                <button data-id="${lugar.id}">
                    Ver más
                </button>

            </div>

        `;

    });

    configurarBotones();

}


//=====================================
// CONFIGURAR BOTONES
//=====================================

function configurarBotones(){

    const botones = document.querySelectorAll(".tarjeta button");

    botones.forEach((boton)=>{

        boton.addEventListener("click", ()=>{

            const id = Number(boton.dataset.id);

            const lugar = lugares.find((lugar)=>{

                return lugar.id === id;

            });

            detalle.innerHTML = `

                <div class="detalleLugar">

                    <h2>${lugar.nombre}</h2>

                    <img src="${lugar.imagen}" alt="${lugar.nombre}">

                    <p>${lugar.descripcion}</p>

                    <button id="cerrarDetalle">
                        Cerrar
                    </button>

                </div>

            `;

            const cerrar =
                document.getElementById("cerrarDetalle");

            cerrar.addEventListener("click", ()=>{

                detalle.innerHTML = "";

            });

        });

    });

}


//=====================================
// BUSCADOR
//=====================================

buscador.addEventListener("input", ()=>{

    const texto = buscador.value.toLowerCase();

    const resultados = lugares.filter((lugar)=>{

        return lugar.nombre
            .toLowerCase()
            .includes(texto);

    });

    mostrarLugares(resultados);

});


//=====================================
// MOSTRAR TODOS AL INICIAR
//=====================================

mostrarLugares(lugares);


//=====================================
// INDEXEDDB
//=====================================

const solicitud = indexedDB.open(
    "BogotaExplorando",
    2
);

solicitud.onupgradeneeded = (event)=>{

    const db = event.target.result;

    db.createObjectStore(
        "lugares",
        {
            keyPath: "id"
        }
    );

    console.log("Base de datos creada");

};

solicitud.onsuccess = (event)=>{

    const db = event.target.result;

    console.log("IndexedDB conectada correctamente");

    const transaccion = db.transaction(
        "lugares",
        "readwrite"
    );

    const almacen = transaccion.objectStore(
        "lugares"
    );

    const solicitudLectura = almacen.getAll();

    solicitudLectura.onsuccess = ()=>{

        const registros = new Map(
            solicitudLectura.result.map((registro) => [registro.id, registro])
        );

        lugares = lugares.map((lugar) => {
            const registro = { ...registros.get(lugar.id), ...lugar };
            almacen.put(registro);
            return registro;
        });

        console.log(lugares);

        mostrarLugares(lugares);

    };

};

solicitud.onerror = () => {
    console.warn("No se pudo abrir IndexedDB; se muestran los lugares iniciales.");
};

