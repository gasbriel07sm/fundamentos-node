const fs = require('fs').promises;

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: 'w' }, encoding = 'utf-8');
}

// w -> apaga tudo e escreve
// a -> acrescenta ao final do arquivo
