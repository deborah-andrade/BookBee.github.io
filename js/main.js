function mostrarSenha(){
    var inputPass = document.getElementById('senha')
    var bntShowPass = document.getElementById('botao-senha')

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text')
        bntShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }else {
        inputPass.setAttribute('type', 'password')
        bntShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
     }
}