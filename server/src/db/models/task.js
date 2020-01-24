'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    value: DataTypes.STRING,
    isDone: DataTypes.BOOLEAN,
    deadline: DataTypes.DATE,
    user: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};