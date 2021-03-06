let email = document.getElementById("email");
let senha = document.getElementById("senha");
let form = document.getElementById("form");

async function login(event) {
  event.preventDefault();

  if (email.value != "" && senha.value != "") {
    try {
      const dados = await axios.post(
        "https://still-gorge-45462.herokuapp.com/login",
        {
          ds_email: email.value,
          ds_senha: senha.value,
        }
      );

      delete dados.data.ds_senha;

      window.localStorage.setItem("usuario", JSON.stringify(dados.data));

      if (dados.data.ds_funcao === "Administrador") {
        window.location.href = "admAgenda.html";
      }

      if (dados.data.ds_funcao === "Funcionário") {
        window.location.href = "funcionarioAgenda.html";
      }

      if (!dados.data.ds_funcao) {
        window.location.href = "clienteAgendamentos.html";
      }
    } catch (err) {
      alert("Usuário não existe");
    }
  } else {
    alert("Favor preencher todos os campos");
  }
}

form.addEventListener("submit", login);
