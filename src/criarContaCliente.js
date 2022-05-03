import Cliente from "../class/cliente.js";

let nome = document.getElementById('nome')
let email = document.getElementById('email')
let cpf = document.getElementById('cpf')
let telefone = document.getElementById('telefone')
let senha = document.getElementById('senha')
let senhaConfirm = document.getElementById('senhaConfirm')
let sexo = document.getElementById('sexo')
let btnCadastro = document.getElementById('cadastro')

btnCadastro.addEventListener('click', function() {
  
  if(nome.value != '' && cpf.value != '' && email.value != '' && senha.value != '' && senhaConfirm.value != ''){ 
    if(senha.value == senhaConfirm.value){
      let cliente = new Cliente(nome.value,cpf.value , email.value,senha.value , telefone.value, sexo.value)
      console.log(cliente)
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