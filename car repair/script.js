// JavaScript for CarSalon website

// Slideshow functionality
const images = document.querySelectorAll("#slideshow img");
let currentImgIndex = 0;

function showImage(index) {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
}

function nextImage() {
    currentImgIndex = (currentImgIndex + 1) % images.length;
    showImage(currentImgIndex);
}

// Auto slide
setInterval(nextImage, 5000); // Change image every 5 seconds