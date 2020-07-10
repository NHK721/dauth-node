export default (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      path: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    },
  );
  Image.associate = (db) => {
    db.Image.hasMany(db.Commodity);
  };
  return Image;
};
