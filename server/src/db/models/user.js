'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING(64),
      is: /[A-Z][a-z]*/,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(64),
      is: /[A-Z][a-z]*/,
      allowNull: false
    },
    login: {
      type: DataTypes.STRING,
      is: /^[^ ^()*&?|\\/]{6,16}$/,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'passwordHash',

      set (value) {
        this.setDataValue('password', bcrypt.hashSync(value, 10));
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      isEmail: true,
    }
  }, {});

  //для одного человеека
  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password)
                  .then(res => res);
  };

  User.associate = function (models) {
    User.hasMany(models.Task, {
      foreignKey: 'userId',
      as: 'tasks'
    });
  };
  return User;
};