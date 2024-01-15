const express = require("express");
const cors = require("cors");
const http = require("http")
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
require("dotenv").config();

const PORT = process.env.SERVER_PORT;

const createDynamicDatabaseConnection = (databaseName) => {
    return new Sequelize({
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: databaseName,
        dialect: 'mysql'
    });
};

const defineUserModel = (sequelizeInstance) => {
    return sequelizeInstance.define("usuario", {
        idUsuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nombre: {
            type: DataTypes.STRING
        },
        Nick: {
            type: DataTypes.STRING
        },
        Password: {
            type: DataTypes.STRING
        },
        Tipo: {
            type: DataTypes.TINYINT
        },
        Activo: {
            type: DataTypes.TINYINT
        }
    }, {
        tableName: "usuario",
        timestamps: false
    });
};

app.use(cors());
app.use(express.json());

app.get("/api/V1", (req, res) => res.send("Todo ok"))

app.get("/api/V1/:database/user/:userid", async ({ params }, res) => {
    const { database, userid } = params;
    const dynamicSequelize = createDynamicDatabaseConnection(`direct18_${database}`);

    try {
        await dynamicSequelize.authenticate();
        const DynamicUser = defineUserModel(dynamicSequelize);
        await DynamicUser.sync();
        const user = await DynamicUser.findByPk(userid, {
            attributes: { exclude: ["Password"] }
        });
        res.status(200).send({
            isValid: true,
            message: `La base de datos que seleccionaste es '${database}' y el id que enviaste es '${userid}'`,
            data: user
        })
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send(`La base de datos que seleccionaste es '${database}' y el id que enviaste es '${userid}'`);
    }
});

const server = http.createServer(app);

server.listen(PORT, () => console.log(`[SERVER] servidor corriendo en el puerto ${PORT}`));
