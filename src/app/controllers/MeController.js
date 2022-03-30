/** @format */

const res = require('express/lib/response');
const { renderSync } = require('node-sass');
const Course = require('../Model/Course');
const { mongoseToObject, mutipleMongooseToObject } = require('../../util/mongoese');

class MeController {
	storedCourses(req, res, next) {
		Course.find({})
			.then((courses) =>
				res.render('me/me-course', {
					courses: mutipleMongooseToObject(courses),
				})
			)

			.catch(next);
	}
}
module.exports = new MeController();
