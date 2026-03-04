let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

// Optional: Auto-slide functionality
setInterval(() => {
    changeSlide(1);
}, 3000); // Change slide every 3 seconds
