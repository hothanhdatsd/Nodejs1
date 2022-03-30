const express = require('express');
const route = express.Router();

const NewController = require('../app/controllers/NewsController')


route.get('/:slug', NewController.show);
route.get('/', NewController.index);

module.exports = route;