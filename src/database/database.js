const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/products-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Conectado!'))
    .catch((err) => {
      return console.log(`Erro na conexão com o banco: ${err}`);
    });
};

module.exports = connectToDatabase;
