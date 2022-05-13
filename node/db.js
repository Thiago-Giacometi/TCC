import { Sequelize } from 'sequelize'
import dotenv from 'dotenv/config.js'

const dbName = 'heroku_d53f2e903c457ca'
const dbUser = 'bf02ce3937888e'
const dbHost = 'us-cdbr-east-05.cleardb.net'
const dbPassword = 'fdec9937'

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: 'mysql',
  host: dbHost,
})

export default sequelize
