import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import User from './model/User';
import Order from './model/Order';
import Image from './model/Image';
import Credit_card from './model/Credit_card';
import Commodity from './model/Commodity';
import Card_bank from './model/Card_bank';
import Bank_account from './model/Bank_account';
import Bank from './model/Bank';
import Admin from './model/Admin';

dotenv.config();

const db = {};
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: 'mysql',
    port: 3306,
    ssl: 'Amazon RDS',
    logging: console.log,
    timezone: '+09:00', // 한국 시간 셋팅
  },
);

db.User = User(sequelize, Sequelize);
db.Image = Image(sequelize, Sequelize);
db.Commodity = Commodity(sequelize, Sequelize);
db.Order = Order(sequelize, Sequelize);
db.Card_bank = Card_bank(sequelize, Sequelize);
db.Bank = Bank(sequelize, Sequelize);
db.Bank_account = Bank_account(sequelize, Sequelize);
db.Credit_card = Credit_card(sequelize, Sequelize);
db.Admin = Admin(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
