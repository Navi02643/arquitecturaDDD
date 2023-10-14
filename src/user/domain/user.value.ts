import { v4 as uuid } from "uuid";
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
    this.password = password;
  }
}
