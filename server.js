import db from "./models/index";
import App from "./app";
import dotenv from "dotenv";
import http from "http";

dotenv.config();

const PORT = process.env.PORT || 4000;
const serverHandler = () => {
  console.log("서버 가동 ON PORT: ", PORT);
};

http.createServer(App.getApp()).listen(PORT, async () => {
  await db.sequelize.authenticate();
  await db.sequelize.sync(true);
  serverHandler();
});