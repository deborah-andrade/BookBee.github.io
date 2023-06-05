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


function prevSlideLR(carrosselId) {
  const slides = document.querySelectorAll('#' + carrosselId + ' .estilizacaoLidos li');
  slideIndex = (slideIndex + slides.length - 1) % slides.length;
  updateSlidesLR(carrosselId);
}

function nextSlideLR(carrosselId) {
  const slides = document.querySelectorAll('#' + carrosselId + ' .estilizacaoLidos li');
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlidesLR(carrosselId);
}

function updateSlidesLR(carrosselId) {
  const slides = document.querySelectorAll('#' + carrosselId + ' .estilizacaoLidos li');
  const slideWidth = slides[0].offsetWidth;
  const corrosselSlides = document.querySelector('#' + carrosselId + ' .estilizacaoLidos');
  corrosselSlides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}