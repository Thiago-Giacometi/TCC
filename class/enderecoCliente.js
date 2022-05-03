import EnderecoLavaRapido from "./enderecoLavaRapido.js"

export default class EnderecoCliente extends EnderecoLavaRapido {
  constructor(nome,rua, numero, bairro, complemento, cidade, uf, cep, id_cliente) {
    super(nome,rua, numero, bairro, complemento, cidade, uf, cep)
    this.id_cliente = id_cliente
  }
}