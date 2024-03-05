const customerRouter = require('express').Router({mergeParams:true});


const CustomerController = require('../controllers/customerController');

customerRouter
.route('/')
.post(CustomerController.createCustomer)
.get(CustomerController.findAll);

customerRouter
.route('/:customerId')
.get(CustomerController.findOneById)
.put(CustomerController.updateById)
.delete(CustomerController.deleteById);


module.exports = customerRouter;