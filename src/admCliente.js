async function popularTabela() {
  table.innerHTML = "";
  try {
    const dados = await axios.get("http://localhost:8090/clientes");
    console.log(dados);

    dados.data.forEach((item) => {
      let linha = table.insertRow();

      let nomeCliente = linha.insertCell(0);
      nomeCliente.innerHTML = item.ds_nome;

      let email = linha.insertCell(1);
      email.innerHTML = item.ds_email;

      let telefone = linha.insertCell(2);
      telefone.innerHTML = item.ds_telefone;

      let cpf = linha.insertCell(3);
      cpf.innerHTML = item.ds_cpf;
    });

  } catch (err) {
    console.log(err);
  }
}

popularTabela();
