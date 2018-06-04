const User = (sequelize, DataTypes) => {
  var User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        notEmpty: true
      },
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        type: DataTypes.STRING
      },
      lastname: {
        type: DataTypes.STRING
      }
    },
    {
      tableName: "users",
      timestamps: false
    }
  );

  return User;
};

module.exports = User;
