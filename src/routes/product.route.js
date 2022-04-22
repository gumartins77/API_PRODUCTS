const route = require('express').Router();
const controllerProducts = require('../controllers/product.controller');

route.get('/find-products', controllerProducts.findAllProductsController);

module.exports = route
