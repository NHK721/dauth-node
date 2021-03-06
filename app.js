import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import routers from './routes/index';

class App {
  constructor() {
    this.app = express();
    this.setMiddleWare();
    this.router();
  }

  getApp() {
    return this.app;
  }

  setMiddleWare() {
    this.app.use(bodyparser.json());
    this.app.use(
      cors({
        origin: '*',
        credentials: false,
      }),
    );
  }

  router() {
    this.router = routers(this.app);
  }
}

export default new App();
