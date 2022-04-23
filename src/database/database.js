const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/products-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected!'))
    .catch((err) => {
      return console.log(`Error connecting to database: ${err}`);
    });
};

module.exports = connectToDatabase;
