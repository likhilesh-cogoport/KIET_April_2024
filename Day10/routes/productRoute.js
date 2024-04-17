const express = require('express');
const productController = require('../controllers/productsController.js');

const productRouter = express.Router();

productRouter.route('/')
    .get(productController.getAllProducts)
    .post(productController.addProduct);

productRouter.route('/:id')
    .put(productController.replaceProduct)
    .delete(productController.deleteProduct);

module.exports = productRouter;