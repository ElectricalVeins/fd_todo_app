'use strict';
module.exports = (sequelize, DataTypes) => {
  const creditCard = sequelize.define('creditCard', {
    number: {
      type: DataTypes.STRING(16),
      allowNull: false,
      validate: {
        isCreditCard: true
      }
    },
    expire: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isAfter: new Date(),
      }
    },
    cvc: {
      type: DataTypes.STRING(3),
      allowNull: false,
      validate: { is: /^[0-9]{3}$/ }
    },
    balance: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,

    },
  }, {
                                        timestamps: false,
                                        schema: 'sandbox',
                                        tableName: 'creditcards',
                                      });
  creditCard.associate = function (models) {
    // associations can be defined here
  };
  return creditCard;
};