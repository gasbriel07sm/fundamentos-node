const express = require('express');
const app = express(); // criando uma instância do Express
app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor rodando na porta 3000');
});

app.use(express.urlencoded({ extended: true })); // para interpretar dados de formulários

// URL - PARAMS
// http://facebook.com/profile/1234567890 (o que muda é apenas o número do ID do perfil)
// QUERY STRINGS
// http://facebook.com/search?q=javascript& (o que muda é apenas o termo de busca)

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome" />
    <button>Ola Hello</button>
    </form>
  `);
});

app.get('/testes/:idUsuarios', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.nome}`);
});