module.exports = function(x, y) {
  return x * y;
}

// caminho absouto (desde a raiz):
console.log(__filename); // nome do arquivo atual
console.log(__dirname); // nome da pasta atual

const path = require('path');
console.log(path.resolve(__dirname, '.', '.', 'arquivos', 'imagens'));
 