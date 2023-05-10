let slideIndex = 0;

function prevSlide() {
  const slides = document.querySelectorAll('.carrosselSlides img');
  slideIndex = (slideIndex +  slides.length - 1) % slides.length;
  updateSlides();
}
function nextSlide() {
  const slides = document.querySelectorAll('.carrosselSlides img');
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlides();
}

function updateSlides(){
  const slides = document.querySelectorAll('.carrosselSlides img');
  const slideWidth = slides[0].offsetWidth + 20;
  const corrosselSlides = document.querySelectorAll('.carrosselSlides');
  corrosselSlides[0].style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

const btnBusca = document.getElementById('search')
const busca = document.getElementById('search')
const txtprocura = document.getElementById('keyWord')
const livros = document.getElementById('livros')

busca.addEventListener('click', async () => {
  const PrincipalBuscar = txtprocura.value.replace(' ', '+');
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${PrincipalBuscar}`);
  const dados = await res.json();
  console.log(dados.items);
  
  if(location.href == 'https://deborah-andrade.github.io/BookBee.github.io/inicial.html'){
    localStorage.setItem('searchResults', JSON.stringify(dados.items));
    location.href = 'https://deborah-andrade.github.io/BookBee.github.io/pagesearch.html';
  }else{
    livros.innerHTML = '';
  
    dados.items.forEach(item => {
      let capaImagem;
      if(item && item.volumeInfo && item.volumeInfo.imageLinks){
        capaImagem = item.volumeInfo.imageLinks.thumbnail;
      }else{
        capaImagem = item.volumeInfo.imageLinks;
      }
      livros.innerHTML = livros.innerHTML + `<div class="conteudoLivros"><img src="${capaImagem}" alt="Capa do livro">
      <li>  ${item.volumeInfo.title}; Pag: ${item.volumeInfo.pageCount} - ${item.volumeInfo.authors} </li></div>`  
      });
    }
  })

window.addEventListener('load', () => {
  if(window.location.href == 'https://deborah-andrade.github.io/BookBee.github.io/pagesearch.html'){
    const livros = document.getElementById('livros');
    const searchResults = JSON.parse(localStorage.getItem('searchResults'));
  
    livros.innerHTML = '';
    
    searchResults.forEach(item => {
      let capaImagem;
      if(item.volumeInfo.imageLinks.thumbnail != null){
        capaImagem = item.volumeInfo.imageLinks.thumbnail; 
      }else{
        capaImagem = item.imageLinks;
      }
      livros.innerHTML = livros.innerHTML + `<div class="conteudoLivros"><img src="${capaImagem}" alt="Capa do livro">
      <li>  ${item.volumeInfo.title}; Pag: ${item.volumeInfo.pageCount} - ${item.volumeInfo.authors} </li></div>`  
    });
  }
})
