'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.belongsToMany(models.Product, {
        through: 'product_categories',
        foreignKey: 'categoryId'
      });
    }
  }
  Category.init({
    categoryName:{
      field: 'category_name',
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    } 
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
    underscored: true
  });
  return Category;
};