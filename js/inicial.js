if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado com sucesso');
      })
      .catch(error => {
        console.log('Erro ao registrar o Service Worker:', error);
      });
  });
}
 // Seleciona o botão de login pelo ID
  var botaoLogin = document.getElementById("botao-login");

  // Adiciona um listener de clique ao botão
  botaoLogin.addEventListener("click", function(event) {
    // Previne o envio do formulário padrão
    event.preventDefault();
    
    // Redireciona o usuário para a página de destino
    window.location.href = "inicial.html";
  });