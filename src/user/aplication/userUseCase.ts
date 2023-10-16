import { UserValue, UserRepository } from "../domain/user.domain";

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public registerUser = async (
    { name, middlename, lastname, email, password} : 
    { name: string; middlename: string; lastname: string; email: string; password: string; }
    ) => {
    const userValue = new UserValue({ name, middlename, lastname, email, password});
    const userCreate = await this.userRepository.registerUser(userValue);
    return userCreate;
  };

  public getDataUser = async (uuid:string) => {
    return await this.userRepository.findUserById(uuid)
  }

  public getUsers = async () => {
    return await this.userRepository.listUsers();
  }
}
