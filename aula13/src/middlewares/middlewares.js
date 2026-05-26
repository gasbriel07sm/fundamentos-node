module.exports = (req, res, next) => {
  console.lot();
  console.log('Passei no middleware');
  next();
}