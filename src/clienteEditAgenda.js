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
    document.getElementById("veiculo").value = dados2.data[0].ds_modelo;
    document.getElementById("placa").value = dados2.data[0].ds_placa;
    document.getElementById("lavaRapido").value = dados2.data[0].tb_lava_rapido.ds_nome;
    document.getElementById("data").value = dados2.data[0].dt_agendamento;
    document.getElementById("hora").value = dados2.data[0].hr_agendamento;
    document.getElementById("modo").value = dados2.data[0].modo;
    document.getElementById("servico").value = dados2.data[0].tb_servico.ds_nome_servico;
    document.getElementById("endereco").value = dados2.data[0].tb_endereco_cliente.ds_tipo_endereco;
    document.getElementById("preco").value = dados2.data[0].tb_servico.ds_preco;
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
    endereco.value != "null" &&
    servico.value != "null" 
  ) {
    let agendamento = new Agendamento(
      veiculo.value,
      placa.value,
      data.value,
      hora.value,
      modo.value,
      id_cliente,
      lavaRapido.value,
      servico.value,
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
    const dados = await axios.get(
      "https://still-gorge-45462.herokuapp.com/lavaRapido"
    );
    console.log(dados);

    const options = dados.data.forEach((item) => {
      const option = new Option(item.ds_nome, item.id_lava_rapido);
      lavaRapido.appendChild(option);
    });

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

async function buscarValor() {
  let idServico = servico.value;

  try {
    const dados2 = await axios.get(
      "https://still-gorge-45462.herokuapp.com/servicosPreco/" + idServico
    );
    console.log(dados2);
    const preco1 = dados2.data[0].ds_preco;
    document.getElementById("preco").value = preco1;
  } catch (err) {
    console.log(err);
  }
}

async function buscarServico() {
  let idLavaRapido = lavaRapido.value;

  try {
    const dados2 = await axios.get(
      "https://still-gorge-45462.herokuapp.com/servicosLavaRapido/" +
        idLavaRapido
    );
    console.log(dados2);
    const options2 = dados2.data.forEach((item) => {
      const option2 = new Option(item.ds_nome_servico, item.id_servico);
      servico.appendChild(option2);
    });
  } catch (err) {
    console.log(err);
  }
};

popularSelect();
preencheAgendamento();

lavaRapido.addEventListener("change", buscarServico);
btnAtualizar.addEventListener("click", enviarFormulario);
servico.addEventListener("change", buscarValor);
