import userModel from "../model/user.define";
import { UserEntity, UserRepository } from "../../domain/user.domain";
import sequelize from "../db/sequelize";

export class SequelizeRepository implements UserRepository {
  async findUserById(uuid: string): Promise<UserEntity | null> {
    try {
      const user = await userModel.findOne({ where: { uuid } });
      return user ? (user.toJSON() as UserEntity) : null;
    } catch (error) {
      console.error("Error finding user by ID:", error);
      return null;
    }
  }

  async listUsers(): Promise<UserEntity[] | null> {
    try {
      const users = await userModel.findAll();
      return users
        ? users.map((user: any) => user.toJSON() as UserEntity)
        : null;
    } catch (error) {
      console.error("Error listing users:", error);
      return null;
    }
  }

  async registerUser(userIn: UserEntity): Promise<UserEntity | null> {
    try {
      const createdUser = await userModel.create(userIn);
      return createdUser ? (createdUser.toJSON() as UserEntity) : null;
    } catch (error) {
      console.error("Error registering user:", error);
      return null;
    }
  }
}
