'use strict';
const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      age: DataTypes.INTEGER,
    } //,
    // {
    //   timestamps: false,
    // }
  );
  return User;
};

module.exports = User;

//   User.init(
//     {
//       name: DataTypes.STRING,
//       email: DataTypes.STRING,
//       age: DataTypes.INTEGER,
//     },
//     {
//       sequelize,
//       modelName: 'User',
//     }
//   );
//   return User;
// };
