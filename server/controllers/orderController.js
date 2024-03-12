const {Order, Customer, Product} = require('../models');
const createError = require ('http-errors');


module.exports.createOrder = async (req, res, next) => {
    try {
        const {body} = req;
        const buying = await Order.create(body);
        
        const orderWithData = await Order.findAll({
            where: {
                id: order.id
            },
            include: [
                {
                    model: Product,
                    attributes: ['id']
                },
                {
                    model: Customer,
                    attributes: ['id']
                }
            ],
        });
        res.status(201).send({data: orderWithData});
    } catch (error) {
        next(error);
    }
};


module.exports.deleteOrder = async (req, res, next) => {
    try {
        const {params: {orderId}} = req;
        const rowsCount = await Order.destroy({
            where: {
                id: orderId
            }
        });

        if(rowsCount === 0) {
            return next (createError(404));
        }
        res.status(200).end();
    } catch (error) {
        next(error);
    }
}

/*module.exports.createOrder = async (req, res, next) => {
    try {
        const {body} = req;
        const order = await Order.create(body);
        
        const orderWithData = await Order.findAll({
            where: {
                id: order.id
            },
            include: [
                {
                    model: Product,
                    attributes: ['id']
                },
                {
                    model: Customer,
                    attributes: ['id']
                }
            ],
        });
        res.status(201).send({data: orderWithData});
    } catch (error) {
        next(error);
    }
};*/