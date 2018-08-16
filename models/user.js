'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userID: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};