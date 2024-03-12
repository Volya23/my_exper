'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Customer, {
        foreignKey: 'customerId'
      }),
      Order.hasMany(models.Product, {
        foreignKey: 'orderId'
      });
    }
  }
  Order.init({
    orderDate: {
      field: 'order_date',
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('new', 'processing', 'finish', 'expired', 'refuse'),
      allowNull: false,
      defaultValue: 'new'
    }
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    underscored: true
  });
  return Order;
};