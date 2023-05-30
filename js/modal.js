const parametrosURL = new URLSearchParams(window.location.search);
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var span1 = document.getElementsByClassName("close-notas")[0];
var span2 = document.getElementsByClassName("close")[0];

// Função para abrir o modal 1
function abrirModal1() {
  modal1.style.display = "block";
  const imgmodal = parametrosURL.get('imagem');
  document.querySelector("#img-capa-modal-notas").setAttribute('src', imgmodal);
  document.querySelector("#titulo-modal-notas").textContent = livro.titulo;
}

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
