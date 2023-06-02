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