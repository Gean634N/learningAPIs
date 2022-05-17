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
