let table = document.getElementById("table");

async function deletarAgendamento(id_agendamento) {
  try {
    await axios.delete(`http://localhost:8090/agenda/${id_agendamento}`);

    alert("Agendamento deletado com sucesso");

    popularTabela();
  } catch (err) {
    console.log(err);
  }
}

async function popularTabela() {
  table.innerHTML = "";
  try {
    const dados = await axios.get("http://localhost:8090/agenda");
    console.log(dados);

    dados.data.forEach((item) => {
      let linha = table.insertRow();

      let lavaRapido = linha.insertCell(0);
      lavaRapido.innerHTML = item.tb_lava_rapido.ds_nome;

      let cliente = linha.insertCell(1);
      cliente.innerHTML = item.tb_cliente.ds_nome;

      let carro = linha.insertCell(2);
      carro.innerHTML = item.ds_modelo;

      let placa = linha.insertCell(3);
      placa.innerHTML = item.ds_placa;

      let data = linha.insertCell(4);
      data.innerHTML = item.dt_agendamento;

      let horario = linha.insertCell(5);
      horario.innerHTML = item.hr_agendamento;

      let servico = linha.insertCell(6);
      servico.innerHTML = item.tb_servico.ds_nome_servico;

      let preco = linha.insertCell(7);
      preco.innerHTML = item.tb_servico.ds_preco;

      let modo = linha.insertCell(8);
      modo.innerHTML = item.modo;

      let excluir = linha.insertCell(9);
      excluir.innerHTML = `<button value="${item.id_agendamento}" class='button is-danger is-small deletar'>Excluir</button>`;
    });

    document.querySelectorAll(".deletar").forEach((button) => {
      button.addEventListener("click", (event) =>
        deletarAgendamento(event.target.value)
      );
    });
  } catch (err) {
    console.log(err);
  }
}

popularTabela();
