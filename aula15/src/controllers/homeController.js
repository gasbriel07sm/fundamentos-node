const HomeModel = require('../models/HomeModels');

HomeModel.find()
  .then(dados => console.log(dados))
  .catch(err => console.error('Erro ao criar documento:', err));

exports.paginaInicial = (req, res) => {
  console.log('Estou executando a homeController');
  res.render('index');
}

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST');
}
