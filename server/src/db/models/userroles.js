'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserRoles = sequelize.define('UserRoles', {
    userId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER
  }, {});
  UserRoles.associate = function(models) {
    // associations can be defined here
  };
  return UserRoles;
};