import { Sequelize } from 'sequelize'
import db from '../db.js'

const endereco = db.define(
  'tb_endereco_cliente',
  {
    id_endereco_cliente: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ds_rua: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ds_numero: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ds_bairro: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ds_complemento: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    ds_cidade: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ds_uf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ds_cep: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ds_tipo_endereco: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'tb_endereco_cliente',
  }
)

export default endereco
