const Products = require('../models/Product');

const findAllProductsService = async () => {
  return await Products.find();
};

const findByIdProductsService = async (idParam) => {
  return await Products.findById(idParam);
};

const createProductService = async (newProduct) => {
  return await Products.create(newProduct);
};

const updateProductService = async (idParam, editedProduct) => {
  return await Products.findByIdAndUpdate(idParam, editedProduct);
};

const deleteProductService = async (idParam) => {
  return await Products.findByIdAndDelete(idParam);
};

module.exports = {
  findAllProductsService,
  findByIdProductsService,
  createProductService,
  updateProductService,
  deleteProductService,
};
