class Funcionario extends Pessoa{
  constructor(nome, cpf, email, senha, funcao) {
    super(nome, cpf, email, senha)
    this.funcao = funcao
  }
}