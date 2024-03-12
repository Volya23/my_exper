const {Product} = require ('../models');

module.exports.createProduct = async (req, res, next) => {
    try {
        const {body, files} = req;

        const createdProduct = await Product.create(body);

        if (files?.length) {
            const images = files.map((file) => ({
                path: file.filename,
                productId: product.id
            }));
            await Product.bulkCreate(images, {
                returning: true
            });
        }
        res.status(201).send(createdProduct);
    } catch (error) {
        next(error);
    }
}

module.exports.getProduct = async (req, res, next) => {
    try {
        const {params:{productId}} = req;
        const product = await Product.findByPk(productId);
        res.status(200).send(product);
    } catch (error) {
        next(error);
    }
}

module.exports.AllProducts = async (req, res, next) => {
    try {
        const allProducts = await Product.findAll();
        res.status(200).send(allProducts);
    } catch (error) {
        next(error);
    }
}

module.exports.updateProduct = async (req, res, next) => {
    try {
        const {params:{productId}, body} = req;
        const result = await Product.update(body, {
            where: {
                id: productId
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

module.exports.deleteProduct = async (req, res, next) => {
    try {
        const {params: {productId}} = req;
        const rowsCount = await Product.destroy({
            where: {
                id: productId
            }
        });

        if(rowsCount > 0) {
            return res.status(200).send('Succesfull delete!');
        } else {
            return res.status(404);
        }
    } catch (error) {
        next(error);
    }
}

module.exports.addPhoto = async (req, res, next) => {
    try {
        const {params:{productId}, files} = req;
        const photos= files.map(file => ({image: file.filename, productId}));
        const addedPoto = await Product.bulkCreate(photos, {returning: true});
        return res.status(201).send({data: addedPoto})
    } catch (error) {
        next(error);
    }
}