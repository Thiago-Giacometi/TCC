import ClienteRepository from '../models/clienteModel.js'
import endereco from '../models/enderecoClienteModel.js'
import agendamento from '../models/agendamentoModel.js'

function buscaTodosClientes(req, res) {
  ClienteRepository.findAll({
    include: { all: true, nested: true },
  }).then((result) => res.json(result))
}

function buscaUmCliente(req, res) {
  ClienteRepository.findAll({
    include: { all: true, nested: true },
    where: {
      id_cliente: req.params.id_cliente,
    },
  }).then((result) => res.json(result))
}

function addCliente(req, res) {
  const { body } = req
  ClienteRepository.create({
    ds_nome: body.ds_nome,
    ds_cpf: body.ds_cpf,
    ds_telefone: body.ds_telefone,
    ds_sexo: body.ds_sexo,
    ds_email: body.ds_email,
    ds_senha: body.ds_senha,
  }).then((result) => res.json(result))
}

async function attCliente(req, res) {
  const { body } = req
  await ClienteRepository.update(
    {
      ds_nome: body.ds_nome,
      ds_cpf: body.ds_cpf,
      ds_telefone: body.ds_telefone,
      ds_sexo: body.ds_sexo,
      ds_email: body.ds_email,
      ds_senha: body.ds_senha,
    },
    {
      where: {
        id_cliente: req.params.id_cliente,
      },
    }
  )

  ClienteRepository.findByPk(req.params.id_cliente).then((result) => res.json(result))
}

async function deletarCliente(req, res) {
  await ClienteRepository.destroy({
    where: {
      id_cliente: req.params.id_cliente,
    },
  })

  ClienteRepository.findAll().then((result) => res.json(result))
}

export default { addCliente, buscaTodosClientes, attCliente, deletarCliente, buscaUmCliente }
