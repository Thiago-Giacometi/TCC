import AdmRepository from '../models/admModel.js'

function buscaTodosAdms(req, res) {
  AdmRepository.findAll().then((result) => res.json(result))
}

function addAdm(req, res) {
  const { body } = req
  AdmRepository.create({
    ds_nome: body.ds_nome,
    ds_cpf: body.ds_cpf,
    ds_telefone: body.ds_telefone,
    ds_email: body.ds_email,
    ds_senha: body.ds_senha,
  }).then((result) => res.json(result))
}

async function attAdm(req, res) {
  const { body } = req
  await AdmRepository.update(
    {
      ds_nome: body.ds_nome,
      ds_cpf: body.ds_cpf,
      ds_telefone: body.ds_telefone,
      ds_email: body.ds_email,
      ds_senha: body.ds_senha,
    },
    {
      where: {
        id_administrador: req.params.id_administrador,
      },
    }
  )

  AdmRepository.findByPk(req.params.id_administrador).then((result) => res.json(result))
}

async function deletarAdm(req, res) {
  await AdmRepository.destroy({
    where: {
      id_administrador: req.params.id_administrador,
    },
  })

  AdmRepository.findAll().then((result) => res.json(result))
}

export default { addAdm, buscaTodosAdms, attAdm, deletarAdm }
