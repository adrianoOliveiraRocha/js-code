module.exports = (app) => {
  app.get('/', (req, res) => {
    require('../control/core').home(req, res);
  })
}