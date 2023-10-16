import sequelize from "../db/sequelize";
import { DataTypes, Model } from "sequelize";
import { UserEntity } from "../../domain/user.domain"; // Ruta real a tu UserEntity

class UserModel extends Model<UserEntity> {}

UserModel.init(
  {
    uuid: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middlename: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "users_dos",
    timestamps: false,
  }
);

(async () => {
  try {
    await UserModel.sync();
  } catch (error) {
    console.error("Error synchronizing models:", error);
  }
})();

export default UserModel;
