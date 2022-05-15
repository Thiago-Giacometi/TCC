let table = document.getElementById("table");
let userName = document.getElementById("username");

async function popularTabela() {
  table.innerHTML = "";
  try {
    const dados = await axios.get(
      "https://still-gorge-45462.herokuapp.com/agenda"
    );
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

      let rua = linha.insertCell(9);
      rua.innerHTML = item.tb_endereco_cliente.ds_rua;

      let numero = linha.insertCell(10);
      numero.innerHTML = item.tb_endereco_cliente.ds_numero;

      let bairro = linha.insertCell(11);
      bairro.innerHTML = item.tb_endereco_cliente.ds_bairro;

      let cidade = linha.insertCell(12);
      cidade.innerHTML = item.tb_endereco_cliente.ds_cidade;

      let uf = linha.insertCell(13);
      uf.innerHTML = item.tb_endereco_cliente.ds_uf;
    });
  } catch (err) {
    console.log(err);
  }
}

popularTabela();
