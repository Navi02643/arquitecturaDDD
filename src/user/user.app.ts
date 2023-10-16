import "dotenv/config";
import express from "express";
import cors from "express";
import userRoute from "./infrastructure/routes/user.routes";

import dbInit from "./infrastructure/db/mongodb";
import sequelize from "./infrastructure/db/sequelize";

const userApp = express();
userApp.use(cors());
userApp.use(express.json());

const port = process.env.USER_PORT || 3001;

dbInit().then();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("[MYSQL]", "Conexion establecida con exito");
  } catch (error) {
    console.error("[MYSQL]", "Error en la conexion:", error);
  }
})();

userApp.use("/user", userRoute);
userApp.listen(port, () => console.log(`USER, Listo por el puerto ${port}`));

export default userApp;
