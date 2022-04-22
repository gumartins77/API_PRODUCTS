const Products = require('../models/Product');

const findAllProductsService = async () => {
  return await Products.find();
};

module.exports = {
  findAllProductsService,
};
