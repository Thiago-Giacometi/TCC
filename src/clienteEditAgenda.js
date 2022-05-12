import Agendamento from "../class/agendamento.js";

let lavaRapido = document.getElementById("lavaRapido");
let veiculo = document.getElementById("veiculo");
let placa = document.getElementById("placa");
let endereco = document.getElementById("endereco");
let data = document.getElementById("data");
let hora = document.getElementById("hora");
let servico = document.getElementById("servico");
let preco = document.getElementById("preco");
let modo = document.getElementById("modo");
let btnAtualizar = document.getElementById("atualizar");
let id_cliente = idCliente();
const id_agendamento = window.localStorage.getItem("idAgendamento")

async function preencheAgendamento() {
  const storage = window.localStorage.getItem("usuario");

  if (!storage) {
    window.location.href = "login.html";
  }
  try {
    const dados2 = await axios.get(
      "http://localhost:8090/agenda/" + id_agendamento
    );
    document.getElementById("lavaRapido").value = dados2.dados[0].tb_lava_rapido.ds_nome;
    document.getElementById("veiculo").value = dados2.dados[0].ds_modelo;
    document.getElementById("placa").value = dados2.dados[0].ds_placa;
    //document.getElementById("endereco").value = dados2.dados[0].;
    document.getElementById("data").value = dados2.dados[0].dt_agendamento;
    document.getElementById("hora").value = dados2.dados[0].hr_agendamento;
    document.getElementById("servico").value = dados2.dados[0].tb_servico.ds_nome_servico;
    document.getElementById("preco").value = dados2.dados[0].tb_servico.ds_preco;
    document.getElementById("modo").value = dados2.dados[0].modo;
  } catch (err) {
    console.log(err);
  }
}

async function enviarFormulario(event) {
  console.log(event);
  if (
    hora.value != "" &&
    veiculo.value != "" &&
    placa.value != "" &&
    data.value != "" &&
    lavaRapido.value != "null" &&
    //endereco.value != "null" &&
    servico.value != "null"
  ) {
    let agendamento = new Agendamento(
      modo.value,
      placa.value,
      data.value,
      hora.value,
      modo.value,
      id_cliente,
      lavaRapido.value,
      servico.value,
      preco.value
    );
    console.log(agendamento);

    await axios.post(`http://localhost:8090/agenda${id_agendamento}`, agendamento);

    alert("Agendamento Atualizado com sucesso");
    preencheAgendamento();
  } else {
    alert("Favor preencher todos os campos");
  }
}

function idCliente() {
  const storage = window.localStorage.getItem("usuario");

  if (!storage) {
    window.location.href = "login.html";
  } else {
    const usuario = JSON.parse(storage);

    return usuario.id_cliente || alert("Realizar Login Novamente!");
  }
}

preencheAgendamento();
btnAtualizar.addEventListener('click', enviarFormulario);