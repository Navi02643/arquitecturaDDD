import { connect } from "mongoose";

const DB_URI = process.env.MONGO_URL;

const dbInit = async () => {
  await connect(String(DB_URI));
  console.log("Estamos ready?");
};

export default dbInit;
