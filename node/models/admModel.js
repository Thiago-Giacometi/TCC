import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("tb_administrador", {
  id_administrador: {
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
  ds_email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  ds_senha: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});
