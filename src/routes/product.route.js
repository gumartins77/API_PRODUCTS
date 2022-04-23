const route = require('express').Router();
const controllerProducts = require('../controllers/product.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/product.middleware');

route.get('/find-products', controllerProducts.findAllProductsController);
route.get(
  '/find-product/:id',
  validId,
  controllerProducts.findByIdProductsController,
);
route.post(
  '/create-product',
  validObjectBody,
  controllerProducts.createProductController,
);
route.put(
  '/update-product/:id',
  validId,
  validObjectBody,
  controllerProducts.updateProductController,
);
route.delete(
  '/delete-product/:id',
  validId,
  controllerProducts.deleteProductController,
);

module.exports = route;
