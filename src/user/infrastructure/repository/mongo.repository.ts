import { UserEntity, UserRepository } from "../../domain/user.domain";
import userModel from "../model/user.schema";

export class MongoRepository implements UserRepository {
  async findUserById(uuid: string): Promise<UserEntity | null> {
    const user = await userModel.findOne({ uuid });
    if (user) {
      return {
        uuid: user.uuid,
        name: user.name,
        middlename: user.middlename,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
      };
    } else {
      return null;
    }
  }

  async registerUser(userIn: UserEntity): Promise<UserEntity | null> {
    const user = await userModel.create(userIn);
    if (user) {
      return userIn;
    } else {
      return null;
    }
  }

  async listUsers(): Promise<UserEntity[] | null> {
    const users = await userModel.find();
    if (users) {
      return users.map((user) => ({
        uuid: user.uuid,
        name: user.name,
        middlename: user.middlename,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
      }));
    } else {
      return null;
    }
  }
}
