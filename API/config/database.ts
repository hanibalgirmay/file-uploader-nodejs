import { Dialect, Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const database_name = process.env.DATABASE_NAME;
const database_user = process.env.DATABASE_USER;
const database_host = process.env.DATABASE_HOST;
const database_driver = process.env.DATABASE_DRIVER as Dialect;
const database_password = process.env.DATABASE_PASSWORD;
const database_port = process.env.DATABASE_PORT || 3306;

const sequelizeConn = new Sequelize(
  database_name as string,
  database_user as string,
  database_password,
  {
    host: database_host,
    port: Number(database_port),
    dialect: database_driver,
  }
);

sequelizeConn
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => console.error("Unable to connect to the database: ", err));



export default sequelizeConn;