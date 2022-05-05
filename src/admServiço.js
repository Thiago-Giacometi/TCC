import Servico from '../class/servico.js'

let lavaRapido = document.getElementById('lavaRapido')
let nome = document.getElementById('servico')
let money = document.getElementById('money')
let descricao = document.getElementById('descricao')
let btnCadastro = document.getElementById('cadastro')

btnCadastro.addEventListener('click', function() {
  
  if(servico.value != '' && money.value != '' && descricao.value != ''){ 
    let servico = new Servico(nome.value, descricao.value , money.value, lavaRapido.value)
    console.log(servico)
  }
  else{
    alert("Favor preencher todos os campos")
  }
})