// Carrusel de imágenes
const images = [
    "imagenes/bandera-uruguay.jpg",
    "imagenes/playa.jpg",
    "imagenes/teatro-solis.jpg",
    "imagenes/campo.jpg",
    "imagenes/carnaval.jpg"
];
const imageElement = document.getElementById('carrusel-image');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function updateCarrusel() {
    imageElement.src = images[currentIndex];
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarrusel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarrusel();
});

// Inicializa el carrusel
updateCarrusel();// JavaScript Document