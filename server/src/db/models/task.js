'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    deadline: {
      type: DataTypes.DATE,
      defaultValue: false,
      allowNull: false,
      validate: {
        isDate: true,
        isAfter: new Date()
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {});
  Task.associate = function (models) {
    Task.belongsTo(models.User,{foreignKey:'userId',
      as:'owner'
    });
  };
  return Task;
};