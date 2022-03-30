/** @format */

const res = require('express/lib/response');
const User = require('../Model/User');
const bcrypt = require('bcryptjs');
const { mongoseToObject, mutipleMongooseToObject } = require('../../util/mongoese');

class UserController {
	index(req, res, next) {
		// User.find({})
		//     .then(courses => res.render('me/me-course', {
		//         courses: mutipleMongooseToObject(courses)
		//     }))
		// .catch(next);
		// const user = User.findById(req.params.id);
		// res.json(user);
	}

	signup(req, res, next) {
		res.render('users/create');
	}
	store(req, res, next) {
		const user = new User(req.body);
		user.save()
			.then(() => res.redirect('/user/signin'))
			.catch(next);
	}
	signin(req, res, next) {
		res.render('users/signin');
	}
	async validate(req, res, next) {
		const username = req.body?.name;
		const password = req.body?.password;

		try {
			const user = await User.findOne({ name: username });

			if (!user) {
				res.render('users/signin', { error: 'Không tìm thấy người dùng' });
				return;
			}

			if (user.password !== password) {
				res.render('users/signin', { error: 'Sai mật khẩu' });
				return;
			}

			req.session.loggedin = true;
			req.session.user = user;

			res.redirect('/');
		} catch (e) {
			console.error(e);
			res.render('users/signin', { error: 'Lỗi Server' });
		}
	}
	async logout(req, res) {
		req.session.destroy();
		res.redirect('/');
	}
}

module.exports = new UserController();
