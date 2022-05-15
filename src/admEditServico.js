import Servico from "../class/servico.js";

let nome = document.getElementById("servico");
let money = document.getElementById("preco");
let descricao = document.getElementById("descricao");
let btnAtualizar = document.getElementById("atualizar");
let lavaRapido;
const id_servico_string = window.localStorage.getItem("idServico");
let id_servico = id_servico_string.replace(/"/g, "");

async function preencheServico() {
  const storage = window.localStorage.getItem("usuario");

  if (!storage) {
    window.location.href = "login.html";
  }
  try {
    const dados2 = await axios.get(
      "https://still-gorge-45462.herokuapp.com/servicos/" + id_servico
    );
    console.log(dados2);
    document.getElementById("servico").value = dados2.data[0].ds_nome_servico;
    document.getElementById("preco").value = dados2.data[0].ds_preco;
    document.getElementById("lavaRapido").value = dados2.data[0].tb_lava_rapido.ds_nome;
    document.getElementById("descricao").value = dados2.data[0].ds_servico;
    lavaRapido = dados2.data[0].tb_lava_rapido.id_lavarapido;
  } catch (err) {
    console.log(err);
  }
}

async function enviarFormulario(event) {
  console.log(event);
  if (
    nome.value != "" &&
    money.value != "" &&
    descricao.value != "" 
  ) {
    let servico = new Servico(
      nome.value,
      descricao.value,
      money.value,
      lavaRapido,
    );
    console.log(servico);

    await axios.put(
      `https://still-gorge-45462.herokuapp.com/servicos/${id_servico}`,
      servico
    );

    alert("Serviço atualizado com sucesso");
    window.location.href = "admServico.html";
  } else {
    alert("Favor preencher todos os campos");
  }
}

preencheServico()
btnAtualizar.addEventListener('click', enviarFormulario)