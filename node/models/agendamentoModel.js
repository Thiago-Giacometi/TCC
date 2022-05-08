import { Sequelize } from 'sequelize'
import db from '../db.js'

const agendamento = db.define(
  'tb_agendamento',
  {
    id_agendamento: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ds_modelo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ds_placa: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dt_agendamento: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    hr_agendamento: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    modo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'tb_agendamento',
  }
)

export default agendamento
