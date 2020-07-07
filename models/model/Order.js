export default (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      price: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        unique: true,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  Order.associate = (db) => {
    db.Order.belongsTo(db.Commodity);
    db.Order.belongsTo(db.User);
  };
  return Order;
};
