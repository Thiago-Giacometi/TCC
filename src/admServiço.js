import Servico from "../class/servico.js";

let nome = document.getElementById("servico");
let money = document.getElementById("preco");
let descricao = document.getElementById("descricao");
let btnCadastro = document.getElementById("cadastro");
let table = document.getElementById("table");
let lavaRapido = document.getElementById("lavaRapidos");

async function deletarServico(id_servico) {
  try {
    await axios.delete(
      `https://still-gorge-45462.herokuapp.com/servicos/${id_servico}`
    );

    alert("Serviço deletado com sucesso");

    popularTabela();
  } catch (err) {
    console.log(err);
  }
}

async function enviarFormulario(event) {
  console.log(event);
  if (
    nome.value != "" &&
    money.value != "" &&
    descricao.value != "" &&
    lavaRapido.value != "null"
  ) {
    let servico = new Servico(
      nome.value,
      descricao.value,
      money.value,
      lavaRapido.value
    );
    console.log(servico);

    await axios.post(
      "https://still-gorge-45462.herokuapp.com/servicos",
      servico
    );

    alert("Serviço cadastrado com sucesso");
    popularTabela();
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
  } catch (err) {
    console.log(err);
  }
}

async function popularTabela() {
  table.innerHTML = "";
  try {
    const dados = await axios.get(
      "https://still-gorge-45462.herokuapp.com/servicos"
    );
    console.log(dados);

    dados.data.forEach((item) => {
      let linha = table.insertRow();

      let nomeServico = linha.insertCell(0);
      nomeServico.innerHTML = item.ds_nome_servico;

      let preco = linha.insertCell(1);
      preco.innerHTML = item.ds_preco;

      let lavaRapido = linha.insertCell(2);
      lavaRapido.innerHTML = item.tb_lava_rapido.ds_nome;

      let descricao = linha.insertCell(3);
      descricao.innerHTML = item.ds_servico;

      let editar = linha.insertCell(4);
      editar.innerHTML = `<button  class='button is-info is-small'>Editar</button>`;

      let excluir = linha.insertCell(5);
      excluir.innerHTML = `<button value="${item.id_servico}" class='button is-danger is-small deletar'>Excluir</button>`;
    });

    document.querySelectorAll(".deletar").forEach((button) => {
      button.addEventListener("click", (event) =>
        deletarServico(event.target.value)
      );
    });
  } catch (err) {
    console.log(err);
  }
}

btnCadastro.addEventListener("click", enviarFormulario);

popularTabela();
popularSelect();
