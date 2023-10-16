import { UserEntity } from "./user.domain";

export interface UserRepository {
  findUserById(uuid: string): Promise<UserEntity | null>;
  listUsers(): Promise<UserEntity[] | null>;
  registerUser(user: UserEntity): Promise<UserEntity | null>;
}
