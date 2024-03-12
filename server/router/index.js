const myRouter = require('express').Router();
const customerRouter = require('./customerRouter');
const productRouter = require('./productRouter');
const categoryRouter = require('./categoryRouter');
const orderRouter = require('./orderRouter');

myRouter.use('/customers', customerRouter);
myRouter.use('/products', productRouter);
myRouter.use('/categories', categoryRouter);
myRouter.use('/orders', orderRouter);

module.exports = myRouter;