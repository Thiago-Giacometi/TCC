export default class EnderecoCliente{
  constructor(nome,rua, numero, bairro, complemento, cidade, uf, cep, id_cliente) {
    this.nome = nome
    this.rua = rua
    this.numero = numero
    this.bairro = bairro
    this.complemento = complemento
    this.cidade = cidade
    this.uf = uf
    this.cep = cep
    this.id_cliente = id_cliente
  }
}