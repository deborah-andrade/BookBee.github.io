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

const hadleEvent = async (event) => {
  if(event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter')){
    
    event.preventDefault();
    const PrincipalBuscar = txtprocura.value.replace(' ', '+');
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${PrincipalBuscar}`);
    const dados = await res.json();

    if(!dados.items || dados.items.length === 0){

      //cria algo para iniforma que o resultado não foi encontrado

    // }else{
    //   if(location.href != 'https://deborah-andrade.github.io/BookBee.github.io/pagesearch.html'){
    //     localStorage.setItem('searchResults', JSON.stringify(dados.items));
    //     location.href = 'https://deborah-andrade.github.io/BookBee.github.io/pagesearch.html';
    //   }else{
        livros.innerHTML = '';
      
          dados.items.forEach(item => {
            let capaImagem;
            if(item && item.volumeInfo && item.volumeInfo.imageLinks){
              capaImagem = item.volumeInfo.imageLinks.thumbnail;
            }else{
              capaImagem = item.volumeInfo.imageLinks;
            }
            livros.innerHTML = livros.innerHTML + `<div class="conteudoLivros"><img src="${capaImagem}" alt="Capa do livro">
            <li>  ${item.volumeInfo.title}; Pag: ${item.volumeInfo.pageCount} - ${item.volumeInfo.authors} <button class="adicionarLivro"><i class="bi bi-plus-square"></i></button></li></div>`  
          });
        } 
      }
  }
// }

txtprocura.addEventListener('keydown', hadleEvent);
busca.addEventListener('click', hadleEvent);

window.addEventListener('load', () => {
  // if(window.location.href == 'https://deborah-andrade.github.io/BookBee.github.io/pagesearch.html'){
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
      <li>  ${item.volumeInfo.title}; Pag: ${item.volumeInfo.pageCount} - ${item.volumeInfo.authors}  <button class="adicionarLivro"><i class="bi bi-plus-square"></i></button></li></div>`  
    });
  }
/*}*/)

function formatarDescricao(descricao){
  const descricaoFormatada = descricao.replace(/<\/?p>/g, '')
  .replace(/<br\s*\/?/gi, '\n').replace(/\<i\s*\>/gi, '')
  .replace(/\<\/b\s*\>/gi, '\n').replace(/\<b\s*\>/gi, '')
  .replace(/\<\/i\s*\>/gi, '');
  return limitarDescricao(descricaoFormatada);
}

function limitarDescricao(descricao){
  if(descricao.length <= 400){
    return descricao;
  } else{
    const descricaoLimitada = descricao.slice(0, 400).trim() + '...';
    return descricaoLimitada;
  }
}

async function exibirDetalheDoLivro(bookId){
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
  const data = await response.json();

  if(data.error){
      console.error('Ocorreu um erro ao obter as informações do livro');
      return;
  }

  const livro = {
      id: bookId,
      titulo: data.volumeInfo.title ,
      autor: data.volumeInfo.authors ? data.volumeInfo.authors[0] : 'Autor Desconhecido',
      descricao: data.volumeInfo.description ? data.volumeInfo.description : 'Sem Descrição',
      paginas: data.volumeInfo.pageCount,
      imagem: data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : 'imagens/1682512674678.png'
  };

  const parametrosURL = new URLSearchParams(livro).toString();
   const urlDetalheLivros = `https://deborah-andrade.github.io/BookBee.github.io/detalhedolivro.html?${parametrosURL}`;
  //const urlDetalheLivros = `http://127.0.0.1:5500/detalhedolivro.html?${parametrosURL}`;
  window.location.href = urlDetalheLivros;
}

//modal
const parametrosURL = new URLSearchParams(window.location.search);
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btnSave1 = document.getElementById("btnSalvar1");
var btnSave2 = document.getElementById("btnSalvar2");
var span1 = document.getElementsByClassName("close-notas")[0];
var span2 = document.getElementsByClassName("close")[0];
let btnSalvaNota = document.getElementById("salarModalNotas");
let arrayDeNotas = [];

// Função para abrir o modal 1
function abrirModal1() {
  modal1.style.display = "block";
  const imgmodal = parametrosURL.get('imagem');
  document.querySelector("#img-capa-modal-notas").setAttribute('src', imgmodal);
  document.querySelector("#titulo-modal-notas").textContent = livro.titulo;
}

btnSalvaNota.addEventListener('click', function () {
  let reviewTexArea = document.getElementById('reviewTextArea');
  let textNota = reviewTexArea.value;

  arrayDeNotas.push(textNota);
  if(arrayDeNotas.length > 3){
    arrayDeNotas = arrayDeNotas.slice(arrayDeNotas.length - 3);
  }

  let areaNotasSalvas = document.getElementById("textNotasSalvas");
  areaNotasSalvas.innerHTML = "";

  for(let i = 0; i < arrayDeNotas.length; i++){
  
    let novoParagrafo = document.createElement('p');
    novoParagrafo.classList.add('nota');
    let textoNota = document.createElement('span')
    textoNota.classList.add('textoNota');
    textoNota.textContent = arrayDeNotas[i];
    novoParagrafo.appendChild(textoNota);
    areaNotasSalvas.appendChild(novoParagrafo);
  }

  reviewTexArea.value = ""

  console.log(arrayDeNotas)
})

// Função para fechar o modal 1
function fecharModal1() {
  modal1.style.display = "none";
}

// Função para abrir o modal 2
function abrirModal2() {
  modal2.style.display = "block";
  const imgmodal = parametrosURL.get('imagem');
  document.querySelector("#img-capa-modal").setAttribute('src', imgmodal);
  document.querySelector("#titulo-modal").textContent = livro.titulo;
}

// Função para fechar o modal 2
function fecharModal2() {
  modal2.style.display = "none";
}

// Atribuindo as funções aos botões correspondentes
btn1.onclick = abrirModal1;
btn2.onclick = abrirModal2;

// Atribuindo as funções de fechar os modais aos botões de fechamento correspondentes
span1.onclick = fecharModal1;
span2.onclick = fecharModal2;

window.onclick = function(event) {
  if (event.target == modal1) {
    fecharModal1();
  }
  if (event.target == modal2) {
    fecharModal2();
  }
}

const livro ={
  id: parametrosURL.get('id'),
  titulo: parametrosURL.get('titulo'),
  autor: parametrosURL.get('autor'),
  descricao: parametrosURL.get('descricao'),
  paginas: parametrosURL.get('paginas'),
  imagem: parametrosURL.get('imagem')
};

document.querySelector("#tituloLivro").textContent = livro.titulo;
document.querySelector("#autorLivro").textContent = livro.autor;
document.querySelector("#descricaoLivro").textContent = formatarDescricao(livro.descricao)
document.querySelector("#numPagina").textContent = livro.paginas;
document.querySelector("#imgCapaLivro").setAttribute('src', livro.imagem);

function adicionarClassificacaoEstrela() {
  const estrelas = document.querySelectorAll(".exibirClassificacao li i");

  estrelas.forEach((estrela, index) => {
    estrela.addEventListener("mouseenter", () => {
      resetarClassificacaoEstrela();

      for (let i = 0; i <= index; i++) {
        estrelas[i].classList.remove("bi-star");
        estrelas[i].classList.add("bi-star-fill");
      }
    });
  });
}

function resetarClassificacaoEstrela() {
  const estrelas = document.querySelectorAll(".exibirClassificacao li i");

  estrelas.forEach((estrela) => {
    estrela.classList.remove("bi-star-fill");
    estrela.classList.add("bi-star");
  });
}

