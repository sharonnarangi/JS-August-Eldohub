const naraslider = document.querySelector('nara-slider');
const slides = document.querySelectorAll('img');
let currentImageIndex = 0

function nextImage(){
    Image[currentImageIndex].classlist.remove('active');
    currentImageIndex = (currentImageIndex + 1) % slides.length;
    slides[currentImageIndex].classList.add('active');
}

setInterval(nextImage, 3000);