import Endereco from "../class/enderecoCliente.js";

let nome = document.getElementById("nome");
let cep = document.getElementById("cep");
let bairro = document.getElementById("bairro");
let uf = document.getElementById("uf");
let cidade = document.getElementById("cidade");
let rua = document.getElementById("rua");
let numero = document.getElementById("numero");
let complemento = document.getElementById("complemento");
let btnCadastro = document.getElementById("cadastro");
let id_cliente = idCliente();

async function deletarEndereco(id_endereco_cliente) {
  try {
    await axios.delete(
      `https://still-gorge-45462.herokuapp.com/clientesEndereco/${id_endereco_cliente}`
    );

    alert("Endereço deletado com sucesso");

    popularTabela();
  } catch (err) {
    console.log(err);
  }
}

function editarAgendamento(id_endereco_cliente) {
  window.localStorage.setItem(
    "idEndereco",
    JSON.stringify(id_endereco_cliente)
  );
  window.location.href = "clientEditEnderecos.html";
}

async function enviarFormulario(event) {
  console.log(event);
  if (
    nome.value != "" &&
    cep.value != "" &&
    bairro.value != "" &&
    uf.value != "" &&
    cidade.value != "" &&
    rua.value != "" &&
    numero.value != ""
  ) {
    let endereco = new Endereco(
      nome.value,
      rua.value,
      numero.value,
      bairro.value,
      complemento.value,
      cidade.value,
      uf.value,
      cep.value,
      id_cliente
    );
    console.log(endereco);

    await axios.post(
      "https://still-gorge-45462.herokuapp.com/clientesEndereco",
      endereco
    );

    alert("Endereço cadastrado com sucesso");
    popularTabela();
    limparCampos();
  } else {
    alert("Favor preencher todos os campos");
  }
}

async function popularTabela() {
  table.innerHTML = "";
  try {
    const dados = await axios.get(
      "https://still-gorge-45462.herokuapp.com/clientesEnderecoCliente/" +
        idCliente()
    );
    console.log(dados);

    dados.data.forEach((item) => {
      let linha = table.insertRow();

      let nome = linha.insertCell(0);
      nome.innerHTML = item.ds_tipo_endereco;

      let rua = linha.insertCell(1);
      rua.innerHTML = item.ds_rua;

      let numero = linha.insertCell(2);
      numero.innerHTML = item.ds_numero;

      let bairro = linha.insertCell(3);
      bairro.innerHTML = item.ds_bairro;

      let complemento = linha.insertCell(4);
      complemento.innerHTML = item.ds_complemento;

      let cidade = linha.insertCell(5);
      cidade.innerHTML = item.ds_cidade;

      let uf = linha.insertCell(6);
      uf.innerHTML = item.ds_uf;

      let cep = linha.insertCell(7);
      cep.innerHTML = item.ds_cep;

      let editar = linha.insertCell(8);
      editar.innerHTML = `<button value="${item.id_endereco_cliente}" class='button is-info is-small editar'>Editar</button>`;

      let excluir = linha.insertCell(9);
      excluir.innerHTML = `<button value="${item.id_endereco_cliente}" class='button is-danger is-small deletar'>Excluir</button>`;
    });

    document.querySelectorAll(".deletar").forEach((button) => {
      button.addEventListener("click", (event) =>
        deletarEndereco(event.target.value)
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

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("cep").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("uf").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("rua").value = "";
  document.getElementById("numero").value = "";
  document.getElementById("complemento").value = "";
}

btnCadastro.addEventListener("click", enviarFormulario);

popularTabela();
