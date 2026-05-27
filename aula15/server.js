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

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash'); 

const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middlewares');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'he',
  store: MongoStore.create({ mongoUrl: process.env.DB_CONNECTION }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 24 * 7,
    httpOnly: true
  }
})
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.on('dbConnected', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  })
}); 
