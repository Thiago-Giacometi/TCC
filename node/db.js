import { Sequelize } from "sequelize"; 
import dotenv from "dotenv/config.js"; 

const dbName = "db_speedwash";
const dbUser = "root";
const dbHost = "localhost";
const dbPassword = "#P672427688x";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: dbHost,
});

export default sequelize; 
