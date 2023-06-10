const searchIcon = document.querySelector('.iconeBusca');
const searchInput = document.querySelector('input');
const searchButton = document.querySelector('.barraDeBusca button');
const searchSpace = document.querySelector('.barraDeBusca');


searchIcon.addEventListener('click', () => {

  if(window.innerWidth <= 950){
    if (searchInput.style.display === 'none') {
        searchInput.style.display = 'inline-block';
        searchButton.style.display = 'flex';
        searchButton.style.justifyContent = 'center';
        searchButton.style. alignItems= 'center';
        searchSpace.style.width = '150%';
        searchSpace.style.height = 'auto';
        searchSpace.style.borderRadius = '0';
    } else {
        searchInput.style.display = 'none';
        searchButton.style.display = 'none';
        searchSpace.style.width = '40px';
        searchSpace.style.height = '40px';
        searchSpace.style.borderRadius = '50%';
  }
    
  }
});


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
      const resultadoPesquisa = document.querySelector('.resultadoPesquisa');
      resultadoPesquisa.innerHTML = `<p>Nenhum resultado encontrado.<p>`;

    }else{
      if(location.href != 'https://deborah-andrade.github.io/BookBee.github.io/pagesearch.html'){
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
            <li>  ${item.volumeInfo.title}; Pag: ${item.volumeInfo.pageCount} - ${item.volumeInfo.authors} <button class="adicionarLivro"><i class="bi bi-plus-square"></i></button></li></div>`  
          });
        } 
      }
  }
}

txtprocura.addEventListener('keydown', hadleEvent);
busca.addEventListener('click', hadleEvent);

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
      <li>  ${item.volumeInfo.title}; Pag: ${item.volumeInfo.pageCount} - ${item.volumeInfo.authors}  <button class="adicionarLivro"><i class="bi bi-plus-square"></i></button></li></div>`  
    });
  }
});