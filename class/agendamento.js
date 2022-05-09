export default class Agendamento {
  constructor(
    modelo,
    placa,
    data,
    hora,
    modo,
    id_cliente,
    id_lava_rapido,
    id_servico,
    id_servico_money
  ) {
    this.ds_modelo = modelo;
    this.ds_placa = placa;
    this.dt_agendamento = data;
    this.hr_agendamento = hora;
    this.modo = modo;
    this.tbClienteIdCliente = id_cliente;
    this.tbLavaRapidoIdLavaRapido = id_lava_rapido;
    this.tbServicoIdServico = id_servico;
    this.ds_preco = id_servico_money;
  }
}
