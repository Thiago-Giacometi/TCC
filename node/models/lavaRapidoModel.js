import { Sequelize } from 'sequelize'

import db from '../db.js'

const lavaRapido = db.define(
  'tb_lava_rapido',
  {
    id_lava_rapido: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ds_nome: {
      type: Sequelize.STRING,
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
      allowNull: false,
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
  },
  {
    tableName: 'tb_lava_rapido',
  }
)

export default lavaRapido
