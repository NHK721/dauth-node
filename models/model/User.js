export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(300),
        allowNull: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      account: {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: true,
      },
      phone_number: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
      birthday: {
        type: DataTypes.STRING(13),
        allowNull: false,
        unique: true,
      },
      address: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    },
  );
  User.associate = (db) => {
    db.User.hasMany(db.Bank_account);
    db.User.hasMany(db.Credit_card);
    db.User.hasMany(db.Order);
  };
  return User;
};
