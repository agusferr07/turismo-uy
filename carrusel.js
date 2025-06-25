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

// Efecto zoom solo para Montevideo
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', function() {
      document.getElementById('img-modal-big').src = img.dataset.full;
      document.getElementById('img-modal').style.display = 'flex';
    });
  });
  document.getElementById('img-modal').addEventListener('click', function(e) {
    if (e.target === this || e.target.id === 'img-modal-big') {
      this.style.display = 'none';
      document.getElementById('img-modal-big').src = "";
    }
  });
});