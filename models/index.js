import Sequelize from "sequelize";
import User from "./model/User";
import dotenv from "dotenv";

dotenv.config();

const db = {};
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    username: "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: "mysql",
    port: 3306,
    ssl: "Amazon RDS",
    logging: console.log,
    timezone: "+09:00", //한국 시간 셋팅
  }
);

db.User = User(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
