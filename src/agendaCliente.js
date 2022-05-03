import Agendamento from '../class/agendamento.js'

let lavaRapido = document.getElementById('lavaRapido')
let veiculo = document.getElementById('veiculo')
let placa = document.getElementById('placa')
let endereco = document.getElementById('endereco')
let data = document.getElementById('data')
let hora = document.getElementById('hora')
let servico = document.getElementById('servico')
let money = document.getElementById('money')
let modo = document.getElementById('modo')
let btnCadastro = document.getElementById('cadastro')
let id_cliente = 0

btnCadastro.addEventListener('click', function() {
  
  if(hora.value != '' && veiculo.value != '' && placa.value != '' && data.value != ''){ 
    let agendamento = new Agendamento(data.value, hora.value , modo.value, id_cliente, lavaRapido.value, servico.value, endereco.value)
    console.log(agendamento)
  }
  else{
    alert("Favor preencher todos os campos")
  }
})