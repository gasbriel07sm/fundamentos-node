const express = require('express');
const app = express(); // criando uma instância do Express
const routes = require('./routes'); // importando as rotas
const path = require('path'); // módulo para lidar com caminhos de arquivos

app.use(express.urlencoded({ extended: true })); // para interpretar dados de formulários

app.use(express.static(path.resolve(__dirname, 'public'))); // definindo o diretório para arquivos estáticos

app.set('views', path.resolve(__dirname, 'src', 'views')); // definindo o diretório das views
app.set('view engine', 'ejs'); // definindo o motor de template como EJS

app.use(routes); // usando as rotas

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor rodando na porta 3000');
});
