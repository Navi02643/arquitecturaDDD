import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    uuid: {
      type: String,
    },
    name: {
      type: String,
    },
    middlename: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  }
);

export default model("users", userSchema);
