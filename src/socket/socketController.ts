import { Server as SocketServer } from "socket.io";
import color from "colors";

export class SocketLogic {
  private io: SocketServer;

  constructor(io: SocketServer) {
    this.io = io;
    this.setupSocket();
  }

  private setupSocket(): void {
    this.io.on("connection", (socket) => {
      console.log(color.green("[SOCKET]"), "Nuevo cliente conectado");
      socket.on("mensaje", (data) => {
        console.log(color.green("[SOCKET]"), "Mensaje recibido:", data);
      });
    });
  }
}
