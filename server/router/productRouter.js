const productRouter = require('express').Router({ mergeParams: true });

const ProductController = require('../controllers/productController');
const { uploadImages } = require('../utils/fileUpload');


  productRouter
    .route('/')
    .get(ProductController.AllProducts)
    .post(uploadImages, ProductController.createProduct);

  productRouter
    .route('/:productId')
    .get(ProductController.getProduct)
    .put(uploadImages, ProductController.addPhoto)
    .delete(ProductController.deleteProduct);

module.exports = productRouter;