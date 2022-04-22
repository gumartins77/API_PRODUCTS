const productsService = require('../services/product.service');
const mongoose = require('mongoose');

const findAllProductsController = async (req, res) => {
  const allProducts = await productsService.findAllProductsService();
  if (allProducts.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum produto cadastrado!' });
  }
  res.send(allProducts);
};

module.exports = {
  findAllProductsController,
};
