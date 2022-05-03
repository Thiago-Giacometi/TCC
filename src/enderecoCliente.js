import Endereco from "../class/enderecoCliente.js";

let nome = document.getElementById('nome')
let cep = document.getElementById('cep')
let bairro = document.getElementById('bairro')
let uf = document.getElementById('uf')
let cidade = document.getElementById('cidade')
let rua = document.getElementById('rua')
let numero = document.getElementById('numero')
let complemento = document.getElementById('complemento')
let btnCadastro = document.getElementById('cadastro')

btnCadastro.addEventListener('click', function() {
  
  if(nome.value != '' && cep.value != '' && bairro.value != '' && uf.value != '' && cidade.value != '' && rua.value != '' && numero.value != '' && complemento.value != ''){ 
    
    let endereco = new Endereco(nome.value,rua.value , numero.value, bairro.value, complemento.value, cidade.value, uf.value, cep.value)
    console.log(endereco)

  }
  else{
    alert("Favor preencher todos os campos")
  }
})