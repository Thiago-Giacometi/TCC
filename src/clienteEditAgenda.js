import Agendamento from "../class/agendamento.js";

let lavaRapido;
let veiculo = document.getElementById("veiculo");
let placa = document.getElementById("placa");
let endereco = document.getElementById("endereco");
let data = document.getElementById("data");
let hora = document.getElementById("hora");
let servico;
let preco = document.getElementById("preco");
let modo = document.getElementById("modo");
let btnAtualizar = document.getElementById("atualizar");
let id_cliente = idCliente();
const id_agendamento_string = window.localStorage.getItem("idAgendamento");
let id_agendamento = id_agendamento_string.replace(/"/g, "");

async function preencheAgendamento() {
  const storage = window.localStorage.getItem("usuario");

  if (!storage) {
    window.location.href = "login.html";
  }
  try {
    const dados2 = await axios.get(
      "https://still-gorge-45462.herokuapp.com/agenda/" + id_agendamento
    );
    console.log(dados2);
    document.getElementById("servico").value = dados2.data[0].tb_servico.ds_nome_servico;
    document.getElementById("veiculo").value = dados2.data[0].ds_modelo;
    document.getElementById("placa").value = dados2.data[0].ds_placa;
    document.getElementById("lavaRapido").value = dados2.data[0].tb_lava_rapido.ds_nome;
    document.getElementById("data").value = dados2.data[0].dt_agendamento;
    document.getElementById("hora").value = dados2.data[0].hr_agendamento;
    document.getElementById("modo").value = dados2.data[0].modo;
    document.getElementById("endereco").value = dados2.data[0].tb_endereco_cliente.ds_tipo_endereco;
    document.getElementById("preco").value = dados2.data[0].tb_servico.ds_preco;
    lavaRapido = dados2.data[0].tb_lava_rapido.id_lavarapido;
    servico = dados2.data[0].tb_servico.id_servico
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
    data.value != ""
  ) {
    let agendamento = new Agendamento(
      veiculo.value,
      placa.value,
      data.value,
      hora.value,
      modo.value,
      id_cliente,
      lavaRapido,
      servico,
      preco.value,
      endereco.value,
    );
    console.log(agendamento);

    await axios.put(
      `https://still-gorge-45462.herokuapp.com/agenda/${id_agendamento}`,
      agendamento
    );
    alert("Agendamento atualizado com sucesso");
    window.location.href = "clienteAgendamentos.html";
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

async function popularSelect() {
  try {
    const dados1 = await axios.get(
      "https://still-gorge-45462.herokuapp.com/clientesEndereco"
    );
    console.log(dados1);

    const options1 = dados1.data.forEach((item) => {
      const option1 = new Option(
        item.ds_tipo_endereco,
        item.id_endereco_cliente
      );
      endereco.appendChild(option1);
    });
  } catch (err) {
    console.log(err);
  }
}
preencheAgendamento();
popularSelect();

btnAtualizar.addEventListener("click", enviarFormulario);

