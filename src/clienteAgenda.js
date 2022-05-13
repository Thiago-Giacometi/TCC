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
let btnCadastro = document.getElementById("cadastro");
let table = document.getElementById("table");
let id_cliente = idCliente();

async function deletarAgendamento(id_agendamento) {
  try {
    await axios.delete(
      `https://still-gorge-45462.herokuapp.com/agenda/${id_agendamento}`
    );

    alert("Agendamento deletado com sucesso");

    popularTabela();
  } catch (err) {
    console.log(err);
  }
}

function editarAgendamento(id_agendamento) {
  window.localStorage.setItem("idAgendamento", JSON.stringify(id_agendamento));
  window.location.href = "clienteEditAgendamento.html";
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

    await axios.post(
      "https://still-gorge-45462.herokuapp.com/agenda",
      agendamento
    );

    alert("Agendamento cadastrado com sucesso");
    popularTabela();
    limparCampos();
  } else {
    alert("Favor preencher todos os campos");
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
      "https://still-gorge-45462.herokuapp.com/clientesEnderecoCliente/" + id_cliente
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

async function popularTabela() {
  table.innerHTML = "";
  try {
    const dados = await axios.get(
      "https://still-gorge-45462.herokuapp.com/agendaCliente/" + id_cliente
    );
    console.log(dados);

    dados.data.forEach((item) => {
      let linha = table.insertRow();

      let lavaRapido = linha.insertCell(0);
      lavaRapido.innerHTML = item.tb_lava_rapido.ds_nome;

      let cliente = linha.insertCell(1);
      cliente.innerHTML = item.tb_cliente.ds_nome;

      let carro = linha.insertCell(2);
      carro.innerHTML = item.ds_modelo;

      let placa = linha.insertCell(3);
      placa.innerHTML = item.ds_placa;

      let data = linha.insertCell(4);
      data.innerHTML = item.dt_agendamento;

      let horario = linha.insertCell(5);
      horario.innerHTML = item.hr_agendamento;

      let servico = linha.insertCell(6);
      servico.innerHTML = item.tb_servico.ds_nome_servico;

      let preco = linha.insertCell(7);
      preco.innerHTML = item.tb_servico.ds_preco;

      let modo = linha.insertCell(8);
      modo.innerHTML = item.modo;

      let endereco = linha.insertCell(9);
      endereco.innerHTML = item.tb_endereco_cliente.ds_tipo_endereco;

      let editar = linha.insertCell(10);
      editar.innerHTML = `<button value="${item.id_agendamento}" class='button is-info is-small editar'>Editar</button>`;

      let excluir = linha.insertCell(11);
      excluir.innerHTML = `<button value="${item.id_agendamento}" class='button is-danger is-small deletar'>Excluir</button>`;
    });

    document.querySelectorAll(".deletar").forEach((button) => {
      button.addEventListener("click", (event) =>
        deletarAgendamento(event.target.value)
      );
    });

    document.querySelectorAll(".editar").forEach((button) => {
      button.addEventListener("click", (event) =>
        editarAgendamento(event.target.value)
      );
    });
  } catch (err) {
    console.log(err);
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

async function buscarValor() {
  preco.value = "";
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
  servico.options.length = 1;
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

function limparCampos() {
  document.getElementById("lavaRapido").value = null;
  document.getElementById("veiculo").value = "";
  document.getElementById("placa").value = "";
  document.getElementById("endereco").value = null;
  document.getElementById("data").value = "";
  document.getElementById("hora").value = "08:00";
  document.getElementById("servico").value = null;
  document.getElementById("preco").value = ""
  document.getElementById("modo").value = "Local";
}

lavaRapido.addEventListener("change", buscarServico);

servico.addEventListener("change", buscarValor);

btnCadastro.addEventListener("click", enviarFormulario);

popularTabela();
popularSelect();
