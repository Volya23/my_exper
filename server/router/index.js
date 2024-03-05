const myRouter = require('express').Router();
const customerRouter = require('./customerRouter');

myRouter.use('/customers', customerRouter);

module.exports = myRouter;