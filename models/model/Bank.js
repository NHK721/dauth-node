export default (sequelize, DataTypes) => {
  const Bank = sequelize.define(
    'Bank',
    {
      name: {
        type: DataTypes.STRING(300),
        allowNull: false,
        unique: true,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    },
  );
  Bank.associate = (db) => {
    db.Bank.hasMany(db.Bank_account);
  };
  return Bank;
};
