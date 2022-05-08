import FuncionarioRepository from '../models/funcionarioModel.js'
import lavaRapido from '../models/lavaRapidoModel.js'

function buscaTodosFuncionarios(req, res) {
  FuncionarioRepository.findAll({
    include: {
      model: lavaRapido,
    },
  }).then((result) => res.json(result))
}

function addFuncionario(req, res) {
  const { body } = req
  FuncionarioRepository.create({
    ds_nome: body.ds_nome,
    ds_cpf: body.ds_cpf,
    ds_email: body.ds_email,
    ds_senha: body.ds_senha,
    ds_funcao: body.ds_funcao,
    tbLavaRapidoIdLavaRapido: body.tbLavaRapidoIdLavaRapido,
  }).then((result) => res.json(result))
}

async function attFuncionario(req, res) {
  const { body } = req
  await FuncionarioRepository.update(
    {
      ds_nome: body.ds_nome,
      ds_cpf: body.ds_cpf,
      ds_email: body.ds_email,
      ds_senha: body.ds_senha,
      ds_funcao: body.ds_funcao,
      tbLavaRapidoIdLavaRapido: body.tbLavaRapidoIdLavaRapido,
    },
    {
      where: {
        id_funcionario: req.params.id_funcionario,
      },
    }
  )

  FuncionarioRepository.findByPk(req.params.id_funcionario).then((result) => res.json(result))
}

async function deletarFuncionario(req, res) {
  await FuncionarioRepository.destroy({
    where: {
      id_funcionario: req.params.id_funcionario,
    },
  })

  FuncionarioRepository.findAll().then((result) => res.json(result))
}

export default { addFuncionario, buscaTodosFuncionarios, attFuncionario, deletarFuncionario }
