import { Sequelize } from 'sequelize'
import db from '../db.js'

const cliente = db.define(
  'tb_cliente',
  {
    id_cliente: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ds_nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ds_cpf: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    ds_telefone: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    ds_sexo: {
      type: Sequelize.CHAR,
      allowNull: false,
    },
    ds_email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    ds_senha: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'tb_cliente',
  }
)

export default cliente
