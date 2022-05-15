export default class EnderecoCliente {
  constructor(
    nome,
    rua,
    numero,
    bairro,
    complemento,
    cidade,
    uf,
    cep,
    id_cliente
  ) {
    this.ds_tipo_endereco = nome;
    this.ds_rua = rua;
    this.ds_numero = numero;
    this.ds_bairro = bairro;
    this.ds_complemento = complemento;
    this.ds_cidade = cidade;
    this.ds_uf = uf;
    this.ds_cep = cep;
    this.tbClienteIdCliente = id_cliente;
  }
}
