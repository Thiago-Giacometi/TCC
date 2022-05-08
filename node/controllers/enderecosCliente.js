import EnderecoClienteRepository from '../models/enderecoClienteModel.js'
import cliente from '../models/clienteModel.js'

function buscaTodosEnderecosCliente(req, res) {
  EnderecoClienteRepository.findAll({
    include: {
      model: cliente,
    },
  }).then((result) => res.json(result))
}

function addEnderecoCliente(req, res) {
  const { body } = req
  EnderecoClienteRepository.create({
    ds_rua: body.ds_rua,
    ds_numero: body.ds_numero,
    ds_bairro: body.ds_bairro,
    ds_complemento: body.ds_complemento,
    ds_cidade: body.ds_cidade,
    ds_uf: body.ds_uf,
    ds_cep: body.ds_cep,
    ds_tipo_endereco: body.ds_tipo_endereco,
    tbClienteIdCliente: body.tbClienteIdCliente,
  }).then((result) => res.json(result))
}

async function attEnderecoCliente(req, res) {
  const { body } = req
  await EnderecoClienteRepository.update(
    {
      ds_rua: body.ds_rua,
      ds_numero: body.ds_numero,
      ds_bairro: body.ds_bairro,
      ds_complemento: body.ds_complemento,
      ds_cidade: body.ds_cidade,
      ds_uf: body.ds_uf,
      ds_cep: body.ds_cep,
      ds_tipo_endereco: body.ds_tipo_endereco,
      tbClienteIdCliente: body.tbClienteIdCliente,
    },
    {
      where: {
        id_endereco_cliente: req.params.id_endereco_cliente,
      },
    }
  )

  EnderecoClienteRepository.findByPk(req.params.id_endereco_cliente).then((result) => res.json(result))
}

async function deletarEnderecoCliente(req, res) {
  await EnderecoClienteRepository.destroy({
    where: {
      id_endereco_cliente: req.params.id_endereco_cliente,
    },
  })

  EnderecoClienteRepository.findAll().then((result) => res.json(result))
}

export default { buscaTodosEnderecosCliente, addEnderecoCliente, attEnderecoCliente, deletarEnderecoCliente }
