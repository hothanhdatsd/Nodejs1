const express = require('express');
const route = express.Router();

const PageController = require('../app/controllers/PageController')



route.get('/:page', PageController.index);

module.exports = route;