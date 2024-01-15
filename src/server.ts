import { App } from "./app";
import { green, red } from "colors"
import "dotenv/config";

const PORT = process.env.SERVER_PORT;
const server = new App().getServer();

server.listen(PORT, () => {
    try {
        console.log(green("[SERVER]"), `servidor corriendo en el puerto ${PORT}`)
    } catch (error) {
        console.log(red("[SERVER]"), `${error}`)
    }
}
);
