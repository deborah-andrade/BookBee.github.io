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

function createCarouselLR(carouselId) {
  let touchStartX;
  let touchEndX;
  let touchMoveX;
  let currentTranslateX = 0;

  if(carouselId === 'lidosRecentes'){
    let carousel = document.querySelector(`#${carouselId} .estilizacaoLidos`);
    let slides = document.querySelectorAll(`#${carouselId} .estilizacaoLidos li`);
    let slideWidth = slides[0].offsetWidth;
    carousel.addEventListener('touchstart', (event) => {
      touchStartX = event.touches[0].clientX;
    });
  
    carousel.addEventListener('touchmove', (event) => {
      touchMoveX = event.touches[0].clientX;
      const translateX = currentTranslateX + touchMoveX - touchStartX;
      carousel.style.transform = `translateX(${translateX}px)`;
    });
  
    carousel.addEventListener('touchend', (event) => {
      touchEndX = event.changedTouches[0].clientX;
      handleGesture();
    });
  } else{
    let carousel = document.querySelector(`#${carouselId} .estilizacaoCitacoes`);
    let slides = document.querySelectorAll(`#${carouselId} .coteudoCitacao`);
    let slideWidth = slides[0].offsetWidth;
    carousel.addEventListener('touchstart', (event) => {
      touchStartX = event.touches[0].clientX;
    });
  
    carousel.addEventListener('touchmove', (event) => {
      touchMoveX = event.touches[0].clientX;
      const translateX = currentTranslateX + touchMoveX - touchStartX;
      carousel.style.transform = `translateX(${translateX}px)`;
    });
  
    carousel.addEventListener('touchend', (event) => {
      touchEndX = event.changedTouches[0].clientX;
      handleGesture();
    });
  }
  

  function handleGesture() {
    if (touchEndX < touchStartX - slideWidth / 4) {
      nextSlideLR(carouselId);
    } else if (touchEndX > touchStartX + slideWidth / 4) {
      prevSlideLR(carouselId);
    } else {
      updateSlidesLR(carouselId);
    }
  }
}

const slideIndices = {};

function prevSlideLR(carrosselId) {
  if(carrosselId === 'lidosRecentes'){
    let slides = document.querySelectorAll(`#${carrosselId} .estilizacaoLidos li`);
    if (!slideIndices[carrosselId]) {
      slideIndices[carrosselId] = 0;
    }
    slideIndices[carrosselId] = (slideIndices[carrosselId] + slides.length - 1) % slides.length;
    updateSlidesLR(carrosselId);
  } else{
    const slides = document.querySelectorAll(`#${carrosselId} .coteudoCitacao`);
    slideIndex = (slideIndex + slides.length - 1) % slides.length;
    updateSlidesLR(carrosselId);
  }

}

function nextSlideLR(carrosselId) {
  if(carrosselId === 'lidosRecentes'){
    const slides = document.querySelectorAll(`#${carrosselId} .estilizacaoLidos li`);
    if (!slideIndices[carrosselId]) {
      slideIndices[carrosselId] = 0;
    }
    slideIndices[carrosselId] = (slideIndices[carrosselId] + 1) % slides.length;
    updateSlidesLR(carrosselId);
  } else{
    const slides = document.querySelectorAll(`#${carrosselId} .coteudoCitacao`);
    slideIndex = (slideIndex + 1) % slides.length;
    updateSlidesLR(carrosselId);
  }
}

function updateSlidesLR(carrosselId) {
  if(carrosselId === 'lidosRecentes'){
    const slides = document.querySelectorAll(`#${carrosselId} .estilizacaoLidos li`);
    const slideWidth = slides[0].offsetWidth;
    const corrosselSlides = document.querySelector(`#${carrosselId} .estilizacaoLidos`);
    currentTranslateX = -slideIndices[carrosselId] * slideWidth;
    corrosselSlides.style.transform = `translateX(${currentTranslateX}px)`;
  }else {
    const slides = document.querySelectorAll(`#${carrosselId} .coteudoCitacao`);
    const slideWidth = slides[0].offsetWidth + 20;
    const corrosselSlides = document.querySelector(`#${carrosselId} .estilizacaoCitacoes`);
    currentTranslateX = -slideIndex * slideWidth;
    corrosselSlides.style.transform = `translateX(${currentTranslateX}px)`;
  }
}

createCarouselLR('lidosRecentes');
createCarouselLR('parteCitacoes');


