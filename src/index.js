/** @format */

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const session = require('express-session');

const methodOverride = require('method-override');
const hbs = handlebars.create({ extname: '.hbs' });
const route = require('./routes');
const db = require('./config/db');

require('dotenv').config();

const app = express();
const port = 3000;

// connect DB;
db.connect();

app.use(
	session({
		secret: 'abcxyz123456709',
		resave: true,
		saveUninitialized: true,
	})
);

app.use(function (req, res, next) {
	res.locals.session = req.session;
	next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(methodOverride('_method'));
app.use(express.json());
//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', hbs.engine);
// app.engine('hbs', handlebars({
//     extname: '.hbs',
//     helpers: {
//         sum: (a, b) => a + b,
//     }
// }));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
	console.log(` app listening at http://localhost:${port}`);
});
