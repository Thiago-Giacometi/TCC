import AgendamentoRepository from '../models/agendamentoModel.js'
import cliente from '../models/clienteModel.js'
import lavaRapido from '../models/lavaRapidoModel.js'
import servico from '../models/servicoModel.js'

function buscarAgendamento(req, res) {
  AgendamentoRepository.findAll({
    include: { all: true, nested: true },
  }).then((result) => res.json(result))
}

function addAgendamento(req, res) {
  const { body } = req
  AgendamentoRepository.create({
    ds_modelo: body.ds_modelo,
    ds_placa: body.ds_placa,
    dt_agendamento: body.dt_agendamento,
    hr_agendamento: body.hr_agendamento,
    tbClienteIdCliente: body.tbClienteIdCliente,
    tbLavaRapidoIdLavaRapido: body.tbLavaRapidoIdLavaRapido,
    tbServicoIdServico: body.tbServicoIdServico,
    modo: body.modo,
  }).then((result) => res.json(result))
}

async function attAgendamento(req, res) {
  const { body } = req
  await AgendamentoRepository.update(
    {
      ds_modelo: body.ds_modelo,
      ds_placa: body.ds_placa,
      dt_agendamento: body.dt_agendamento,
      hr_agendamento: body.hr_agendamento,
      tbClienteIdCliente: body.tbClienteIdCliente,
      tbLavaRapidoIdLavaRapido: body.tbLavaRapidoIdLavaRapido,
      tbServicoIdServico: body.tbServicoIdServico,
      modo: body.modo,
    },
    {
      where: {
        id_agendamento: req.params.id_agendamento,
      },
    }
  )

  AgendamentoRepository.findByPk(req.params.id_agendamento).then((result) => res.json(result))
}

async function deletarAgendamento(req, res) {
  await AgendamentoRepository.destroy({
    where: {
      id_agendamento: req.params.id_agendamento,
    },
  })

  AgendamentoRepository.findAll().then((result) => res.json(result))
}

export default { addAgendamento, buscarAgendamento, attAgendamento, deletarAgendamento }
