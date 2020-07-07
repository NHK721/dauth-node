export default (sequelize, DataTypes) => {
  const Commodity = sequelize.define(
    "Commodity",
    {
      name: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER(),
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  Commodity.associate = (db) => {
    db.Commodity.hasMany(db.Order);
    db.Commodity.belongsTo(db.Image);
  };
  return Commodity;
};
