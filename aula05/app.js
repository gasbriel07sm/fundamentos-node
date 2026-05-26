const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'arquivo.json');
const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

//const pessoas = [
//  { nome: 'João' },
//  { nome: 'Maria' },
//  { nome: 'José' }, 
//  { nome: 'Ana' }
//];
//
//const json = JSON.stringify(pessoas, '', 2);
//escrever(caminhoArquivo, json);

async function leArquio(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  dados = JSON.parse(dados);
  dados.forEach(val => console.log(val));
}

leArquio(caminhoArquivo);