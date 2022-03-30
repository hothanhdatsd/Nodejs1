/** @format */

const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');
const meRouter = require('./me');
const pageRouter = require('./page');
const userRouter = require('./user');
const cartRouter = require('./cart');

function route(app) {
	app.use('/courses', courseRouter);
	app.use('/news', newsRouter);
	app.use('/', siteRouter);
	app.use('/me', meRouter);
	app.use('/page', pageRouter);
	app.use('/user', userRouter);
	app.use('/cart', cartRouter);
}

module.exports = route;
