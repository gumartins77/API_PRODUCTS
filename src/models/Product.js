const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  color: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  sizes: {
    type: String,
    require: true,
  },
  material: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;
