'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Order, {
        foreignKey: 'orderId'
      });
      Product.belongsToMany(models.Category, {
        through: 'product_categories',
        foreignKey: 'productId'
      });
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    rating: {
      type: DataTypes.FLOAT
    },
    inventory: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    underscored: true
  });
  return Product;
};