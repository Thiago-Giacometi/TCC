import Funcionario from "../class/funcionario.js";

let nome = document.getElementById('nome')
let email = document.getElementById('email')
let cpf = document.getElementById('cpf')
let senha = document.getElementById('senha')
let senhaConfirm = document.getElementById('senhaConfirm')
let lavaRapido = document.getElementById('lavaRapido')
let btnCadastro = document.getElementById('cadastro')

btnCadastro.addEventListener('click', function() {
  
  if(nome.value != '' && cpf.value != '' && email.value != '' && senha.value != '' && senhaConfirm.value != ''){ 
    if(senha.value == senhaConfirm.value){
      let funcionario = new Funcionario(nome.value,cpf.value , email.value, senha.value, lavaRapido.value)
      console.log(funcionario)
    } 
    else{
      alert("Senhas Incompativeis")
      document.getElementById('senha').value = ''
      document.getElementById('senhaConfirm').value = ''
    }
  }
  else{
    alert("Favor preencher todos os campos")
  }
})