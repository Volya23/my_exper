const orderRouter = require('express').Router({mergeParams:true});

const customerRouter = require('./customerRouter');
const productRouter = require('./productRouter');

const OrderController = require ('../controllers/orderController'); 


orderRouter
.route('/')
.post(OrderController.createOrder);

orderRouter
.route('/:orderId')
.delete(OrderController.deleteOrder);


orderRouter.use('/:customerId', customerRouter);
orderRouter.use('/:orderId/products', productRouter);

module.exports = orderRouter;
