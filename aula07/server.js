const express = require('express');
const app = express(); // criando uma instância do Express
app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor rodando na porta 3000');
});

//         Criar,  Ler,  Atualizar, Deletar
// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST,   GET,  PUT,    DELETE

// http://meusite.com/ <- GET -> entregue a página /
// http://meusite.com/sobre <- GET -> entregue a página sobre
// http://meusite.com/contato <- GET -> entregue a página contato

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome" />
    <button>Ola Hello</button>
    </form>
  `);
});

app.post('/', (req, res) => {
  res.send('Formulário recebido');
});

app.get('/contato', (req, res) => {
  res.send('Página de contato');
});