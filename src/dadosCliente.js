import Cliente from "../class/cliente.js";

let nome = document.getElementById("nome");
let email = document.getElementById("email");
let cpf = document.getElementById("cpf");
let telefone = document.getElementById("telefone");
let senha = document.getElementById("senha");
let senhaConfirm = document.getElementById("senhaConfirm");
let sexo = document.getElementById("sexo");
let btnAtualizar = document.getElementById("cadastro");

function idCliente() {
  const storage = window.localStorage.getItem("usuario");

  if (!storage) {
    window.location.href = "login.html";
  } else {
    const usuario = JSON.parse(storage);

    return usuario.id_cliente || alert("Realizar Login Novamente!");
  }
}
let id_cliente = idCliente();

function preencheCliente() {
  const storage = window.localStorage.getItem("usuario");

  if (!storage) {
    window.location.href = "login.html";
  } else {
    const usuario = JSON.parse(storage);
    document.getElementById("nome").value = usuario.ds_nome;
    document.getElementById("email").value = usuario.ds_email;
    document.getElementById("senha").value = usuario.ds_senha;
    document.getElementById("cpf").value = usuario.ds_cpf;
    document.getElementById("telefone").value = usuario.ds_telefone;
  }
}

async function enviarFormulario(event) {
  console.log(event);
  if (
    nome.value != "" &&
    cpf.value != "" &&
    email.value != "" &&
    senha.value != "" &&
    senhaConfirm.value != ""
  ) {
    let cliente = new Cliente(
      nome.value,
      cpf.value,
      email.value,
      senha.value,
      telefone.value,
      sexo.value
    );
    console.log(cliente);

    await axios.put(`http://localhost:8090/clientes/${id_cliente}`, cliente);

    alert("Cadastro atualizado com sucesso");
  } else {
    alert("Favor preencher todos os campos");
  }
}

async function updateLocalStorage(event) {
  event.preventDefault();
  try {
    const dados = await axios.get(
      "http://localhost:8090/clientes/" + id_cliente,
      {
        ds_email: email.value,
        ds_senha: senha.value,
      }
    );

    delete dados.data.ds_senha;

    window.localStorage.setItem("usuario", JSON.stringify(dados.data));
  } catch (err) {
    alert("Usuário não existe");
  }
}

btnAtualizar.addEventListener("click", enviarFormulario);

preencheCliente();
