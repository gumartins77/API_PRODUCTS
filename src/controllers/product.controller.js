const productsService = require('../services/product.service');
const mongoose = require('mongoose');

const findAllProductsController = async (req, res) => {
  const allProducts = await productsService.findAllProductsService();
  if (allProducts.length == 0) {
    return res.status(404).send({ message: 'There is no registered product!' });
  }
  res.send(allProducts);
};

const findByIdProductsController = async (req, res) => {
  const chosenProduct = await productsService.findByIdProductsService(
    req.params.id,
  );
  if (!chosenProduct) {
    return res.status(404).send({ message: 'Product not found!' });
  }
  res.send(chosenProduct);
};

const createProductController = async (req, res) => {
  const createProduct = await productsService.createProductService(req.body);
  res.status(201).send({ message: 'Product created successfully!' });
};

const updateProductController = async (req, res) => {
  const updateProduct = await productsService.updateProductService(
    req.params.id,
    req.body,
  );
  res.send({ message: 'Product successfully updated!' });
};

const deleteProductController = async (req, res) => {
  const deleteProduct = await productsService.deleteProductService(
    req.params.id,
  );
  res.send({ message: 'Product successfully deleted!' });
};

module.exports = {
  findAllProductsController,
  findByIdProductsController,
  createProductController,
  updateProductController,
  deleteProductController,
};
