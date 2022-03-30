/** @format */

const express = require('express');
const route = express.Router();
const authMiddleware = require('../middleware/auth');
const CartController = require('../app/controllers/CartController');

route.get('/', authMiddleware, CartController.show);
route.get('/add/:id', authMiddleware, CartController.create);
route.get('/delete/:id', authMiddleware, CartController.delete);

module.exports = route;
