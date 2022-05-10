import ClienteRepository from '../models/clienteModel.js'
import FuncionarioRepository from '../models/funcionarioModel.js'

async function login(req, res) {
  const { ds_email, ds_senha } = req.body

  const cliente = await ClienteRepository.findOne({
    where: {
      ds_email,
      ds_senha,
    },
  })

  if (cliente) {
    return res.json(cliente)
  }

  const funcionario = await FuncionarioRepository.findOne({
    where: {
      ds_email,
      ds_senha,
    },
  })

  if (funcionario) {
    return res.json(funcionario)
  }

  return res.status(404).end()
}

export default { login }
