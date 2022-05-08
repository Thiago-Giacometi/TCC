import ServicoRepository from '../models/servicoModel.js'
import lavaRapido from '../models/lavaRapidoModel.js'
import agendamento from '../models/agendamentoModel.js'

function buscaTodosServicos(req, res) {
  ServicoRepository.findAll({
    include: { all: true, nested: true },
  }).then((result) => res.json(result))
}

function addServico(req, res) {
  const { body } = req
  ServicoRepository.create({
    ds_nome_servico: body.ds_nome_servico,
    ds_servico: body.ds_servico,
    ds_preco: body.ds_preco,
    tbLavaRapidoIdLavaRapido: body.tbLavaRapidoIdLavaRapido,
  }).then((result) => res.json(result))
}

async function attServico(req, res) {
  const { body } = req
  await ServicoRepository.update(
    {
      ds_nome_servico: body.ds_nome_servico,
      ds_servico: body.ds_servico,
      ds_preco: body.ds_preco,
      tbLavaRapidoIdLavaRapido: body.tbLavaRapidoIdLavaRapido,
    },
    {
      where: {
        id_servico: req.params.id_servico,
      },
    }
  )

  ServicoRepository.findByPk(req.params.id_servico).then((result) => res.json(result))
}

async function deletarServico(req, res) {
  await ServicoRepository.destroy({
    where: {
      id_servico: req.params.id_servico,
    },
  })

  ServicoRepository.findAll().then((result) => res.json(result))
}

export default { addServico, buscaTodosServicos, attServico, deletarServico }
