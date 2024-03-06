const { Category } = require('../models');


module.exports.createCategory = async (req, res, next) => {
    try {
        const { body } = req;
        const addCategory = await Category.create(body);
        return res.status(201).send(addCategory);
    } catch (error) {
        next(error);
    }
}

module.exports.deleteById = async (req, res, next) => {
    try {
        const {params: {categoryId}} = req;

        const rowsCount = await Category.destroy({
            where: {
                id: categoryId
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
        const {params: {categoryId}, body } = req;
        const result = await Category.update(body, {
            where: {
                id: categoryId
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