import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import { UserEntity } from "./user.domain";

export class UserValue implements UserEntity {
  uuid: string;
  name: string;
  middlename: string;
  lastname: string;
  email: string;
  password: string;
  constructor({
    name,
    middlename,
    lastname,
    email,
    password,
  }: {
    name: string;
    middlename: string;
    lastname: string;
    email: string;
    password: string;
  }) {
    this.uuid = uuid();
    this.name = name;
    this.middlename = middlename;
    this.lastname = lastname;
    this.email = email;
    this.password = this.encryptPassword(password);
  }

  private encryptPassword(password: string): string {
    return bcrypt.hashSync(password, Number(process.env.SALT_ROUNDS));
  }
}
