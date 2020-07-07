export default (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "Admin",
    {
      email: {
        type: DataTypes.STRING(300),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  return Admin;
};
