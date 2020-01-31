'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {});
  Role.associate = function (models) {
    Role.belongsToMany(models.User, {
      through: 'UserRoles',
      foreignKey: 'userId',
    });
  };
  return Role;
};