import { Sequelize } from "sequelize";

const sequelize = new Sequelize("practicas", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default sequelize;
