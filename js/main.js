//VARIABLES
const imagenCabecera = document.querySelector("#imagenCabecera"); //cogemos la ID de la imagen de header
const contenedorGaleria = document.querySelector(".flexContainer") //invocamos a flexcontainer que es donde van las imágenes de galería 


//ARRAYS DE IMÁGENES
const arrayHeader = [
    "assets/banner/1.jpg",
    "assets/banner/2.jpg",
    "assets/banner/3.jpg",
    "assets/banner/4.jpg",
    "assets/banner/5.jpg",
    "assets/banner/6.jpg",
    "assets/banner/7.jpg",
    "assets/banner/8.jpg"
];

const arrayGaleria = [
    {
        imagen: "assets/viajes/viajes-1.jpg",
        titulo: "Descansando",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        alt: "Chica tumbada en una hamaca en playa paradisíaca"
    },
    {
        imagen: "assets/viajes/viajes-2.jpg",
        titulo: "Hacia la cabaña",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        alt: "Pasarela sobre el mar y cabaña que se ve al fondo"
    },
    {
        imagen: "assets/viajes/viajes-3.jpg",
        titulo: "Señales",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        alt: "Conjunto de señales indicando diferentes sitios"
    },
    {
        imagen: "assets/viajes/viajes-4.jpg",
        titulo: "Sevilla",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        alt: "Parte de la plaza de España en Sevilla"
    },
    {
        imagen: "assets/viajes/viajes-5.jpg",
        titulo: "Puente de Sevilla",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        alt: "Puente en la plaza España de Sevilla"
    },
    {
        imagen: "assets/viajes/viajes-6.jpg",
        titulo: "Túnel en la costa",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        alt: "Túnel de carretera junto a la costa"
    }
];

//FUNCIONES

//foto aleatoria del header
const indiceAleatorio = Math.floor(Math.random() * arrayHeader.length);
const fotoHeaderAleatoria = arrayHeader[indiceAleatorio];
imagenCabecera.src = fotoHeaderAleatoria;

//aquí empiezo con la galería y sus imágenes
function imgGaleria() {
    arrayGaleria.forEach(function (foto) {
        const divTarjeta = document.createElement("div")
        const imagenTarjeta = document.createElement("img")
        const tituloTarjeta = document.createElement("h2")
        const descripcionTarjeta = document.createElement("p")
        imagenTarjeta.src = foto.imagen;
        imagenTarjeta.alt = foto.alt;
        imagenTarjeta.titulo = foto.titulo;
        imagenTarjeta.descripcion = foto.descripcion;
        tituloTarjeta.textContent = `${foto.titulo}`
        descripcionTarjeta.textContent = `${foto.descripcion}`
        divTarjeta.append(imagenTarjeta);
        divTarjeta.append(tituloTarjeta);
        divTarjeta.append(descripcionTarjeta);
        contenedorGaleria.append(divTarjeta);
    });
};


//LLAMADAS A FUNCIONES
imgGaleria();





