'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('product_categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        field: 'product_id',
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'products',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      categoryId: {
        field: 'category_id',
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'categories',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('product_categories');
  }
};
