import express, { Application } from "express";
import cors from "cors";
import color from "colors";
import http, { Server as HttpServer } from "http";
import { Server as SocketServer } from "socket.io";
import "dotenv/config";

import { SocketLogic } from "./socket/socketController";
import userApp from "./user/user.app";

class Server {
  private static instance: Server;
  private port: number = Number(process.env.MASTER_PORT) || 3000;
  private app: Application = express();
  private server: HttpServer = http.createServer(this.app);
  private io: SocketServer = new SocketServer(this.server);

  private socketLogic: SocketLogic;

  private constructor() {
    this.socketLogic = new SocketLogic(this.io);
    this.app.use("/api", userApp)
    this.app.use(cors)
    this.app.use(express.json())
    this.listen();
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log(
        color.green("[SERVER]"),
        `El servidor esta corriendo en el puerto ${this.port}`
      );
    });
  }

  public static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }
}

Server.getInstance();
