 import Pessoa from "./pessoa.js"
 
 export default class Funcionario extends Pessoa{
  constructor(nome, cpf, email, senha,id_lavaRapido, funcao) {
    super(nome, cpf, email, senha)
    this.id_lavaRapido = id_lavaRapido
    this.funcao = funcao
  }
}