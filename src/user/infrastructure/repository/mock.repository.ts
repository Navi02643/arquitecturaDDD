import { UserEntity, UserRepository } from "../../domain/user.domain";

const MOCK_USER = [
  {
    uuid: "0000-0000-0000-0000",
    name: "Carlos Ivan",
    middlename: "Mercado",
    lastname: "Marin",
    email: "karlos123jun@gmail.com",
    password: "admin1234",
  },
  {
    uuid: "0000-0000-0000-0001",
    name: "Chistopher",
    middlename: "Mercado",
    lastname: "Marin",
    email: "crismemar15@gmail.com",
    password: "1234admin",
  },
];

export class MockRepository implements UserRepository {
  async findUserById(uuid: string): Promise<UserEntity | null> {
    return MOCK_USER.find((user) => user.uuid === uuid) || null;
  }

  async registerUser(user: UserEntity): Promise<UserEntity | null> {
    MOCK_USER.push(user);
    return user;
  }

  async listUsers(): Promise<UserEntity[] | null> {
    return MOCK_USER;
  }
}
