var textosAlternativos = ['"Me abrace, que no abraço mais do que em palavras, as pessoas se gostam."', '"Ela escondia com palavras o que eu publicava com silêncio."', '"Não existem inocentes. Só existem diferentes graus de responsabilidade."'];

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mudarTextoAleatoriamente() {
  var textoElemento = document.getElementById("texto");
  var numeroAleatorio = gerarNumeroAleatorio(0, textosAlternativos.length - 1);
  textoElemento.textContent = textosAlternativos[numeroAleatorio];
}

mudarTextoAleatoriamente();

setInterval(function() {
  mudarTextoAleatoriamente();
}, 5000);
