const { Customer } = require('../models');


module.exports.createCustomer = async (req, res, next) => {
    try {
        const { body } = req;
        const createCustomer = await Customer.create(body);
        return res.status(201).send(createCustomer);
    } catch (error) {
        next(error);
    }
}

module.exports.findAll = async (req, res, next) => {
    try {
        const allCustomers = await Customer.findAll({offset:0, limit: 5});
        return res.status(200).send(allCustomers);
    } catch (error) {
        next(error);
    }
}

module.exports.findOneById = async (req, res, next) => {
    try {
        const {params: {customerId}} = req;
        const customer = await Customer.findByPk(customerId);
        return res.status(200).send(customer);
    } catch (error) {
        next(error);
    }
}

module.exports.deleteById = async (req, res, next) => {
    try {
        const {params: {customerId}} = req;

        const rowsCount = await Customer.destroy({
            where: {
                id: customerId
            }
        });

        if(rowsCount > 0) {
            return res.status(200).send('Succesfull delete!');
        } else {
            return res.status(204);
        }
    } catch (error) {
        next(error);
    }
}

module.exports.updateById = async (req, res, next) => {
    try {
        const {params: {customerId}, body } = req;
        const result = await Customer.update(body, {
            where: {
                id: customerId
            }
        });
        if(result > 0) {
            return res.status(200).send('Information was changed');
        } else {
            return res.status(404);
        }
    } catch (error) {
        next(error);
    }
}

module.exports.getCustomerWithOrders = async (req, res, next) => {
    try {
        const {params: {customerId}} = req;

        const customerWithGroups = await Customer.findByPk(customerId, {
            attributes: ['id', 'first_name', 'last_name'],
            include: {
                model: Order,
                required: true,
                through: { // налаштування зв'язуючої таблиці
                    attributes: [] //працює на зв'язуючу таблицю
                },
                attributes: ['id', 'order_date', 'status']
            }
        });

        if(!customerWithGroups) {
            throw new NotFound();
        }
        return res.status(200).send(customerWithGroups);
    } catch (error) {
        next(error);
    }
}