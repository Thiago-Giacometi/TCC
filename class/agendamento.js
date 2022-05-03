export default class Agendamento {
  constructor(data, hora, modo, id_cliente, id_lava_rapido, id_servico, id_endereco){
    this.data = data
    this.hora = hora
    this.modo = modo
    this.id_cliente = id_cliente
    this.id_lava_rapido = id_lava_rapido
    this.id_servico = id_servico
    this.id_endereco = id_endereco
  }

}