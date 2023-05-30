// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

const parametrosURL = new URLSearchParams(window.location.search);
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  const imgmodal= parametrosURL.get('imagem');
  document.querySelector("#img-capa-modal").setAttribute('src',imgmodal);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}