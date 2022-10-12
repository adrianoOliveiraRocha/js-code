module.exports = (app) => {
  app.get('/', (req, res) => {
    require('../control/core.js').home(req, res);
  })

  app.get('/create-pdf', (req, res) => {
    require('../control/core.js').createPDF(req, res);
  })
}