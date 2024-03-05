'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.hasMany(models.Order, {
        foreignKey: 'customerId'
      });
    }
  }
  Customer.init({
    firstName: {
      field: 'first_name',
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      field: 'last_name',
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING
    },
    birthday: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true
      }
    }
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers',
    underscored: true
  });
  return Customer;
};