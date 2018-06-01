// users - MODELS

const Users = (sequelize, DataTypes) => {
  var Users = sequelize.define(
    "Users",
    {
      name: {
        type: DataTypes.STRING,
        notEmpty: true
        //   validate: {
        //     len: {
        //       args: 3,
        //       msg: "Name must be atleast 3 characters in length"
        //     }
        //   }
      },
      email: {
        type: DataTypes.STRING,
        unique: true
        //   validate: {
        //     len: {
        //       args: [6, 128],
        //       msg: "Email address must be between 6 and 128 characters in length"
        //     },
        //     isEmail: {
        //       msg: "Email address must be valid"
        //     }
        //   }
      },
      password: {
        type: DataTypes.STRING
        //   allowNull: false
      },

      lastname: {
        type: DataTypes.STRING
      }
    },
    {
      tableName: "users"
    }
  );

  return Users;
};

module.exports = Users;
