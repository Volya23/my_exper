const categoryRouter = require('express').Router({mergeParams:true});


const CategoryController = require('../controllers/categoryController');

categoryRouter
.route('/')
.post(CategoryController.createCategory);

categoryRouter
.route('/:categoryId')
.put(CategoryController.updateById)
.delete(CategoryController.deleteById);


module.exports = categoryRouter;