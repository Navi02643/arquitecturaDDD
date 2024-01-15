import express, { Application } from "express";
import http, { Server } from "http";

import moment from "moment-timezone";

import {
  corsMiddleware,
  routeNotFound,
} from "./middlewares/generalMiddlewares";

class App {
  private app: Application;
  private server: Server;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(corsMiddleware);
    this.routes();
    this.app.use(routeNotFound);
    this.server = http.createServer(this.app);
  }

  private routes() {
    this.app.get("/:zona_horaria", ({ params }, res) => {
      let { zona_horaria } = params;
      zona_horaria = zona_horaria.replace(/-/g, "/")
      const fecha_default = moment().format("YYYY-MM-DD HH:mm:ss")
      const fecha_zona_horaria = moment().tz(`${zona_horaria}`).format("YYYY-MM-DD HH:mm:ss");
      return res
        .status(200)
        .send({ zona_horaria, fecha_default, fecha_zona_horaria });
    });
  }

  public getServer() {
    return this.server;
  }
}

export { App };
