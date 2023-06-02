let slideIndex = 0;

function prevSlide(carrosselId) {
  const slides = document.querySelectorAll('#' + carrosselId + ' .carrosselSlides img');
  slideIndex = (slideIndex +  slides.length - 1) % slides.length;
  updateSlides(carrosselId);
}
function nextSlide(carrosselId) {
  const slides = document.querySelectorAll('#' + carrosselId + ' .carrosselSlides img');
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlides(carrosselId);
}

function updateSlides(carrosselId){
  const slides = document.querySelectorAll('#' + carrosselId + ' .carrosselSlides img');
  const slideWidth = slides[0].offsetWidth + 20;
  const corrosselSlides = document.querySelectorAll('#' + carrosselId + ' .carrosselSlides');
  corrosselSlides[0].style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

