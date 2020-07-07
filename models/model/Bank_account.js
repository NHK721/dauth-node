export default (sequelize, DataTypes) => {
  const Bank_account = sequelize.define(
    "Bank_account",
    {
      number: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  Bank_account.associate = (db) => {
    db.Bank_account.belongsTo(db.User);
    db.Bank_account.belongsTo(db.Bank);
  };
  return Bank_account;
};
