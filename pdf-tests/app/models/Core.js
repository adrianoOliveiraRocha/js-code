'use strict';

function Core() {
  //...
}

Core.prototype.test = function() {
  return "This is a test";
}

Core.prototype.create = async function() {
  const pdfLib = require('pdf-lib');

}

module.exports = Core;