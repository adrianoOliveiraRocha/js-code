'use strict';

module.exports.home = (req, res) => {
  res.render('core/home.ejs')
}

module.exports.createPDF = (req, res) => {
  const Core = require('./../models/Core');
  let core = new Core();
  
  res.send('Tests :)');
}