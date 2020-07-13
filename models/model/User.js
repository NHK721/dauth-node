export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING(300),
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
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
        type: DataTypes.DATE(),
        allowNull: false,
      },
      avatar_url: {
        type: DataTypes.STRING(300),
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
