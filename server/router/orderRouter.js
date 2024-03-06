const orderRouter = require('express').Router({mergeParams:true});

const customerRouter = require('./customerRouter');
const productRouter = require('./productRouter');

const OrderController = require ('../controllers/orderController'); 

const { uploadImages } = require('../utils/fileUpload');


orderRouter
.route('/')
.post(uploadImages, OrderController.createOrder);

orderRouter
.route('/:orderId')
.get(OrderController.getOrder)
.put(uploadImages, OrderController.updateOrder)
.delete(OrderController.deleteOrder);


orderRouter.use('/:customersId', customerRouter);
orderRouter.use('/:orderId/products', productRouter);

module.exports = orderRouter;
