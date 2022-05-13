import LavaRapido from "../class/lavaRapido.js";

let nome = document.getElementById("nome");
let cep = document.getElementById("cep");
let bairro = document.getElementById("bairro");
let uf = document.getElementById("uf");
let cidade = document.getElementById("cidade");
let rua = document.getElementById("rua");
let numero = document.getElementById("numero");
let complemento = document.getElementById("complemento");
let btnAtualizar = document.getElementById("atualizar");
const id_lavarapido_string = window.localStorage.getItem("idLavaRapido");
let id_lavarapido = id_lavarapido_string.replace(/"/g, "");

async function preencheLavaRapido() {
  const storage = window.localStorage.getItem("usuario");

  if (!storage) {
    window.location.href = "login.html";
  }
  try {
    const dados2 = await axios.get(
      "https://still-gorge-45462.herokuapp.com/lavarapido/" + id_lavarapido
    );
    console.log(dados2);
    document.getElementById("nome").value = dados2.data[0].ds_nome;
    document.getElementById("cep").value = dados2.data[0].ds_cep;
    document.getElementById("bairro").value = dados2.dados[0].ds_bairro;
    document.getElementById("uf").value = dados2.data[0].ds_uf;
    document.getElementById("cidade").value = dados2.data[0].ds_cidade;
    document.getElementById("rua").value = dados2.data[0].ds_rua;
    document.getElementById("numero").value = dados2.dados[0].ds_numero;
    document.getElementById("complemento").value = dados2.dados[0].ds_complemento;
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
    let lavaRapido = new LavaRapido(
      nome.value,
      rua.value,
      numero.value,
      bairro.value,
      complemento.value,
      cidade.value,
      uf.value,
      cep.value
    );
    console.log(lavaRapido);

    await axios.put(
      `https://still-gorge-45462.herokuapp.com/lavaRapido/${id_lavarapido}`,
      lavaRapido
    );

    alert("Lava Rápido atualizado com sucesso");
    window.location.href = "admLavaRapidos.html";
  } else {
    alert("Favor preencher todos os campos");
  }
}

preencheLavaRapido()
btnAtualizar.addEventListener('click', enviarFormulario)