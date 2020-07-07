export default (sequelize, DataTypes) => {
  const Card_bank = sequelize.define(
    "Card_bank",
    {
      name: {
        type: DataTypes.STRING(300),
        allowNull: false,
        unique: true,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  Card_bank.associate = (db) => {
    db.Card_bank.hasMany(db.Credit_card);
  };
  return Card_bank;
};
