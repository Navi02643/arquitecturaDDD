import { Request, Response } from "express";
import { UserUseCase } from "../../aplication/userUseCase";

export class UserController {
  constructor(private userUseCase: UserUseCase) {}

  public getUserById = async ({ params }: Request, res: Response) => {
    const { uuid } = params;
    const user = await this.userUseCase.getDataUser(String(uuid));
    res.send(user);
  };

  public getAllUsers = async (req: Request, res: Response) => {
    const usersList = await this.userUseCase.getUsers();
    res.send(usersList);
  };

  public inserUser = async ({ body }: Request, res: Response) => {
    const user = await this.userUseCase.registerUser(body);
    res.send(user);
  };
}
