export default (sequelize, DataTypes) => {
  const Credit_card = sequelize.define(
    "Credit_card",
    {
      number: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  Credit_card.associate = (db) => {
    db.Credit_card.belongsTo(db.User);
    db.Credit_card.belongsTo(db.Card_bank);
  };
  return Credit_card;
};
