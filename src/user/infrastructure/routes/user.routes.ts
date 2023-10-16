import { Router } from "express";
import { UserUseCase } from "../../aplication/userUseCase";
import { UserController } from "../controller/user.controller";
import { MockRepository } from "../repository/mock.repository";
import { MongoRepository } from "../repository/mongo.repository"
import { SequelizeRepository } from "../repository/sequelize.repository"

const route = Router();
const userRepo = new SequelizeRepository();
const userUseCase = new UserUseCase(userRepo);
const userCtrl = new UserController(userUseCase);

route.get(`/all`, userCtrl.getAllUsers);
route.get(`/:uuid`, userCtrl.getUserById);
route.post(`/`, userCtrl.inserUser);

export default route;
