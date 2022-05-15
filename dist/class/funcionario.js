import Pessoa from "./pessoa.js";

export default class Funcionario extends Pessoa {
  constructor(nome, cpf, email, senha, id_lavaRapido, funcao) {
    super(nome, cpf, email, senha);
    this.tbLavaRapidoIdLavaRapido = id_lavaRapido;
    this.ds_funcao = funcao;
  }
}
