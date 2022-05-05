import Pessoa from "../class/pessoa.js"

let email = document.getElementById('email')
let senha = document.getElementById('senha')
let btnCadastro = document.getElementById('cadastro')

btnCadastro.addEventListener('click', function() {
  
  if(email.value != '' && senha.value != ''){ 
      let pessoa = new Pessoa()
      pessoa.email = email.value
      pessoa.senha = senha.value
      console.log(pessoa)
  }
  else{
    alert("Favor preencher todos os campos")
  }
})