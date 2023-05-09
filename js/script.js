

const btnBusca = document.getElementById('search')
const busca = document.getElementById('search')
const txtprocura = document.getElementById('keyWord')
const livros = document.getElementById('livros')

busca.addEventListener('click', async () => {
  const PrincipalBuscar = txtprocura.value.replace(' ', '+');
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${PrincipalBuscar}`);
  const dados = await res.json();
  console.log(dados.items);
  
  if(location.href == 'http://127.0.0.1:5500/inicial.html'){
    localStorage.setItem('searchResults', JSON.stringify(dados.items));
    location.href = 'http://127.0.0.1:5500/pagesearch.html';
  }else{
    livros.innerHTML = '';
  
    dados.items.forEach(item => {
      const capaImagem = item.volumeInfo.imageLinks.thumbnail; 
      livros.innerHTML = livros.innerHTML + `<div class="conteudoLivros"><img src="${capaImagem}" alt="Capa do livro">
      <li>  ${item.volumeInfo.title} - ${item.volumeInfo.authors}  </li></div>`  });
      }
  })

window.addEventListener('load', () => {
  const livros = document.getElementById('livros')
  const searchResults = JSON.parse(localStorage.getItem('searchResults'))

  livros.innerHTML = '';
  
  searchResults.forEach(item => {
    const capaImagem = item.volumeInfo.imageLinks.thumbnail; 
    livros.innerHTML = livros.innerHTML + `<div class="conteudoLivros"><img src="${capaImagem}" alt="Capa do livro">
    <li>  ${item.volumeInfo.title} - ${item.volumeInfo.authors}  </li></div>`  })
})