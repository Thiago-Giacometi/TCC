import LavaRapidoRepository from '../models/lavaRapidoModel.js'
import servico from '../models/servicoModel.js'
import funcionario from '../models/funcionarioModel.js'
import agendamento from '../models/agendamentoModel.js'

function buscaTodosLavaRapidos(req, res) {
  LavaRapidoRepository.findAll({
    include: { all: true, nested: true },
  }).then((result) => res.json(result))
}

function addLavaRapido(req, res) {
  const { body } = req
  LavaRapidoRepository.create({
    ds_nome: body.ds_nome,
    ds_rua: body.ds_rua,
    ds_numero: body.ds_numero,
    ds_bairro: body.ds_bairro,
    ds_complemento: body.ds_complemento,
    ds_cidade: body.ds_cidade,
    ds_uf: body.ds_uf,
    ds_cep: body.ds_cep,
  }).then((result) => res.json(result))
}

async function attLavaRapido(req, res) {
  const { body } = req
  await LavaRapidoRepository.update(
    {
      ds_nome: body.ds_nome,
      ds_rua: body.ds_rua,
      ds_numero: body.ds_numero,
      ds_bairro: body.ds_bairro,
      ds_complemento: body.ds_complemento,
      ds_cidade: body.ds_cidade,
      ds_uf: body.ds_uf,
      ds_cep: body.ds_cep,
    },
    {
      where: {
        id_lava_rapido: req.params.id_lava_rapido,
      },
    }
  )

  LavaRapidoRepository.findByPk(req.params.id_lava_rapido).then((result) => res.json(result))
}

async function deletarLavaRapido(req, res) {
  await LavaRapidoRepository.destroy({
    where: {
      id_lava_rapido: req.params.id_lava_rapido,
    },
  })

  LavaRapidoRepository.findAll().then((result) => res.json(result))
}

export default { addLavaRapido, buscaTodosLavaRapidos, attLavaRapido, deletarLavaRapido }
