const express = require('express');
const app = express(); // criando uma instância do Express
const routes = require('./routes'); // importando as rotas

app.use(express.urlencoded({ extended: true })); // para interpretar dados de formulários
app.use(routes); // usando as rotas

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor rodando na porta 3000');
});
