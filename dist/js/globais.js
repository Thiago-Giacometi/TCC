let sair = document.getElementById("sair");

function adicionaUsername() {
  let userName = document.getElementById("username");

  if (userName) {
    const storage = window.localStorage.getItem("usuario");

    if (!storage) {
      window.location.href = "login.html";
    }

    const usuario = JSON.parse(storage);

    userName.innerText = usuario.ds_nome || "Usuário";
  }
}

function logout() {
  window.localStorage.removeItem("usuario");

  window.location.href = "login.html";
}

function checarLogout() {
  if (sair) {
    sair.addEventListener("click", logout);
  }
}

checarLogout();
adicionaUsername();
