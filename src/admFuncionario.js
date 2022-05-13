import Funcionario from "../class/funcionario.js";

let nome = document.getElementById("nome");
let email = document.getElementById("email");
let cpf = document.getElementById("cpf");
let senha = document.getElementById("senha");
let senhaConfirm = document.getElementById("senhaConfirm");
let funcao = document.getElementById("funcao");
let lavaRapido = document.getElementById("lavaRapido");
let btnCadastro = document.getElementById("cadastro");
let table = document.getElementById("table");

async function deletarServico(id_funcionario) {
  try {
    await axios.delete(
      `https://still-gorge-45462.herokuapp.com/funcionario/${id_funcionario}`
    );

    alert("Cadastro do funcionário deletado com sucesso");

    popularTabela();
  } catch (err) {
    console.log(err);
  }
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cpf").value = "";
  document.getElementById("senha").value = "";
  document.getElementById("senhaConfirm").value = "";
  document.getElementById("lavaRapido").value = null;
}

async function enviarFormulario(event) {
  console.log(event);
  if (
    nome.value != "" &&
    cpf.value != "" &&
    email.value != "" &&
    senha.value != "" &&
    senhaConfirm.value != "" &&
    lavaRapido.value != "null"
  ) {
    if (senha.value == senhaConfirm.value) {
      var funcionario = new Funcionario(
        nome.value,
        cpf.value,
        email.value,
        senha.value,
        lavaRapido.value,
        funcao.value
      );
    } else {
      alert("Senhas Incompativeis");
    }
    console.log(funcionario);

    await axios.post(
      "https://still-gorge-45462.herokuapp.com/funcionario",
      funcionario
    );

    alert("Funcionário cadastrado com sucesso");
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
  } catch (err) {
    console.log(err);
  }
}

async function popularTabela() {
  table.innerHTML = "";
  try {
    const dados = await axios.get(
      "https://still-gorge-45462.herokuapp.com/funcionario"
    );
    console.log(dados);

    dados.data.forEach((item) => {
      let linha = table.insertRow();

      let nomeFuncionario = linha.insertCell(0);
      nomeFuncionario.innerHTML = item.ds_nome;

      let cpf = linha.insertCell(1);
      cpf.innerHTML = item.ds_cpf;

      let lavaRapido = linha.insertCell(2);
      lavaRapido.innerHTML = item.tb_lava_rapido.ds_nome;

      let senha = linha.insertCell(3);
      senha.innerHTML = item.ds_senha;

      let editar = linha.insertCell(4);
      editar.innerHTML = `<button  class='button is-info is-small'>Editar</button>`;

      let excluir = linha.insertCell(5);
      excluir.innerHTML = `<button value="${item.id_funcionario}" class='button is-danger is-small deletar'>Excluir</button>`;
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
