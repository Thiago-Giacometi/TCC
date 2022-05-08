import { Sequelize } from 'sequelize'

import db from '../db.js'

const funcionario = db.define(
  'tb_funcionarios',
  {
    id_funcionario: {
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
    ds_email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    ds_senha: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ds_funcao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'tb_funcionario',
  }
)

export default funcionario
