var express = require('express');
var router = express.Router();

var Product = require('../models/product');
var sara  = require('../models/product');

Product.methods(['get','put','post','delete']);
Product.register(router,'/products');

// sara.methods(['get','post','put','delete']);
// sara.register(router,'/sara')

module.exports = router;

