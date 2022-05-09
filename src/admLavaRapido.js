import LavaRapido from "../class/lavaRapido.js";

let nome = document.getElementById("nome");
let cep = document.getElementById("cep");
let bairro = document.getElementById("bairro");
let uf = document.getElementById("uf");
let cidade = document.getElementById("cidade");
let rua = document.getElementById("rua");
let numero = document.getElementById("numero");
let complemento = document.getElementById("complemento");
let btnCadastro = document.getElementById("cadastro");
let table = document.getElementById("table");

async function deletarLavaRapido(id_lava_rapido) {
  try {
    await axios.delete(`http://localhost:8090/lavaRapido/${id_lava_rapido}`);

    alert("Lava Rápido deletado com sucesso");

    popularTabela();
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

    await axios.post("http://localhost:8090/lavaRapido", lavaRapido);

    alert("Lava Rápido cadastrado com sucesso");
    popularTabela();
  } else {
    alert("Favor preencher todos os campos");
  }
}

async function popularTabela() {
  table.innerHTML = "";
  try {
    const dados = await axios.get("http://localhost:8090/lavaRapido");
    console.log(dados);

    dados.data.forEach((item) => {
      let linha = table.insertRow();

      let nomeLavarapido = linha.insertCell(0);
      nomeLavarapido.innerHTML = item.ds_nome;

      let cep = linha.insertCell(1);
      cep.innerHTML = item.ds_cep;

      let bairro = linha.insertCell(2);
      bairro.innerHTML = item.ds_bairro;

      let estado = linha.insertCell(3);
      estado.innerHTML = item.ds_uf;

      let cidade = linha.insertCell(4);
      cidade.innerHTML = item.ds_cidade;

      let rua = linha.insertCell(5);
      rua.innerHTML = item.ds_rua;

      let numero = linha.insertCell(6);
      numero.innerHTML = item.ds_numero;

      let complemento = linha.insertCell(7);
      complemento.innerHTML = item.ds_complemento;

      let editar = linha.insertCell(8);
      editar.innerHTML = `<button  class='button is-info is-small'>Editar</button>`;

      let excluir = linha.insertCell(9);
      excluir.innerHTML = `<button value="${item.id_lava_rapido}" class='button is-danger is-small deletar'>Excluir</button>`;
    });

    document.querySelectorAll(".deletar").forEach((button) => {
      button.addEventListener("click", (event) =>
        deletarLavaRapido(event.target.value)
      );
    });
  } catch (err) {
    console.log(err);
  }
}

btnCadastro.addEventListener("click", enviarFormulario);

popularTabela();
