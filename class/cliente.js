import Pessoa from "./pessoa.js"

export default class Cliente extends Pessoa{
  constructor(nome, cpf, email, senha, telefone, sexo) {
    super(nome, cpf, email, senha)
    this.telefone = telefone
    this.sexo = sexo
  }
}