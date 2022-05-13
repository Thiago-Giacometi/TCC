import Funcionario from "../class/funcionario.js";

let nome = document.getElementById("nome");
let email = document.getElementById("email");
let cpf = document.getElementById("cpf");
let senha;
let funcao = document.getElementById("funcao");
let lavaRapido = document.getElementById("lavaRapido");
let btnAtualizar = document.getElementById("atualizar");
const id_funcionario_string = window.localStorage.getItem("idFuncionario");
let id_funcionario = id_funcionario_string.replace(/"/g, "");

async function preencheFuncionario() {
  const storage = window.localStorage.getItem("usuario");

  if (!storage) {
    window.location.href = "login.html";
  }
  try {
    const dados2 = await axios.get(
      "https://still-gorge-45462.herokuapp.com/funcionario/" + id_funcionario
    );
    console.log(dados2);
    document.getElementById("nome").value = dados2.data[0].ds_nome;
    document.getElementById("email").value = dados2.data[0].ds_email;
    document.getElementById("cpf").value = dados2.dados[0].ds_cpf;
    document.getElementById("funcao").value = dados2.data[0].ds_funcao;
    document.getElementById("lavaRapido").value = dados2.data[0].tb_lava_rapido.ds_nome;
    senha.value = dados2.data[0].ds_senha;

  } catch (err) {
    console.log(err);
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


async function enviarFormulario(event) {
  console.log(event);
  if (
    nome.value != "" &&
    cpf.value != "" &&
    email.value != "" &&
    lavaRapido.value != "null"
  ) {
    let funcionario = new Funcionario(
      nome.value,
      cpf.value,
      email.value,
      senha.value,
      lavaRapido.value,
      funcao.value
    );
    console.log(funcionario);

    await axios.put(
      `https://still-gorge-45462.herokuapp.com/funcionario/${id_funcionario}`,
      funcionario
    );
    alert("Funcionário atualizado com sucesso");
    window.location.href = "admFuncionarios.html";
  } else {
    alert("Favor preencher todos os campos");
  }
}

preencheFuncionario();
popularSelect();
btnAtualizar.addEventListener('click', enviarFormulario);