// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// falaNome();

// podemos exportar por desestruturação
// const { nome, sobrenome, falaNome } = require('./mod1');
// falaNome();
// console.log(nome, sobrenome);

const { Pessoa } = require('./mod1');
const p1 = new Pessoa('Luiz');
console.log(p1);