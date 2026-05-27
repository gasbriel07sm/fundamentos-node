require('dotenv').config();
const express = require('express');
const app = express();
// connecting to the database
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION)
  .then(() => {
    app.emit('dbConnected');
  })
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));


const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middlewares');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(meuMiddleware);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.on('dbConnected', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  })
}); 
