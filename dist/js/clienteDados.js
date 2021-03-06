import Cliente from "../class/cliente.js";

let nome = document.getElementById("nome");
let email = document.getElementById("email");
let cpf = document.getElementById("cpf");
let telefone = document.getElementById("telefone");
let senha = document.getElementById("senha");
let senhaConfirm = document.getElementById("senhaConfirm");
let sexo = document.getElementById("sexo");
let btnAtualizar = document.getElementById("cadastro");
let id_cliente = idCliente();

function idCliente() {
  const storage = window.localStorage.getItem("usuario");

  if (!storage) {
    window.location.href = "login.html";
  } else {
    const usuario = JSON.parse(storage);

    return usuario.id_cliente || alert("Realizar Login Novamente!");
  }
}

async function preencheCliente() {
  const storage = window.localStorage.getItem("usuario");

  if (!storage) {
    window.location.href = "login.html";
  }
  try {
    const dados2 = await axios.get(
      "https://still-gorge-45462.herokuapp.com/clientes/" + id_cliente
    );
    document.getElementById("nome").value = dados2.data[0].ds_nome;
    document.getElementById("email").value = dados2.data[0].ds_email;
    document.getElementById("cpf").value = dados2.data[0].ds_cpf;
    document.getElementById("telefone").value = dados2.data[0].ds_telefone;
    document.getElementById("sexo").value = dados2.data[0].ds_sexo;
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
    senha.value != "" &&
    senhaConfirm.value != ""
  ) {
    if(senha.value == senhaConfirm.value){
      let cliente = new Cliente(
        nome.value,
        cpf.value,
        email.value,
        senha.value,
        telefone.value,
        sexo.value
      );
      await axios.put(
        `https://still-gorge-45462.herokuapp.com/clientes/${id_cliente}`,
        cliente
      );
  
      alert("Cadastro atualizado com sucesso");
      preencheCliente();
      document.getElementById("senha").value = "";
      document.getElementById("senhaConfirm").value = "";
      
    } else {
      alert("Senha incorreta")
    }
  } else {
    alert("Favor preencher todos os campos");
  }
}

btnAtualizar.addEventListener("click", enviarFormulario);

preencheCliente();
