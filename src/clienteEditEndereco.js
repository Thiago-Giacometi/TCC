import Endereco from "../class/enderecoCliente.js";

let nome = document.getElementById("nome");
let cep = document.getElementById("cep");
let bairro = document.getElementById("bairro");
let uf = document.getElementById("uf");
let cidade = document.getElementById("cidade");
let rua = document.getElementById("rua");
let numero = document.getElementById("numero");
let complemento = document.getElementById("complemento");
let btnAtualizar = document.getElementById("atualizar");
let id_cliente = idCliente();
const id_endereco_string = window.localStorage.getItem("idEndereco");
let id_endereco = id_endereco_string.replace(/"/g, "");

async function preencheEndereco() {
  const storage = window.localStorage.getItem("usuario");

  if (!storage) {
    window.location.href = "login.html";
  }
  try {
    const dados2 = await axios.get(
      "https://still-gorge-45462.herokuapp.com/enderecoCliente/" + id_endereco
    );
    console.log(dados2);
    document.getElementById("nome").value = dados2.data[0].ds_tipo_endereco;
    document.getElementById("cep").value = dados2.data[0].ds_cep;
    document.getElementById("bairro").value = dados2.data[0].ds_bairro;
    document.getElementById("uf").value = dados2.data[0].ds_uf;
    document.getElementById("cidade").value = dados2.data[0].ds_cidade;
    document.getElementById("rua").value = dados2.data[0].ds_rua;
    document.getElementById("numero").value = dados2.data[0].ds_numero;
    document.getElementById("complemento").value = dados2.data[0].ds_complemento;
  } catch (err) {
    console.log(err);
  }
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
      id_cliente,
    );
    console.log(endereco);

    await axios.put(
      `https://still-gorge-45462.herokuapp.com/clientesEndereco/${id_endereco}`,
      endereco
    );

    alert("Endereço atualizado com sucesso");
    popularTabela();
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

preencheEndereco();
btnAtualizar.addEventListener("click", enviarFormulario);

