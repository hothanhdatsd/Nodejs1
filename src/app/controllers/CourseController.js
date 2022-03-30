/** @format */

const res = require('express/lib/response');
const { renderSync } = require('node-sass');
const Course = require('../Model/Course');
const { mongoseToObject } = require('../../util/mongoese');

class NewsController {
	// GET news

	show(req, res, next) {
		Course.findOne({ slug: req.params.slug })
			.then((course) => res.render('course/show', { course: mongoseToObject(course) }))
			.catch(next);
	}
	// GET
	create(req, res, next) {
		res.render('course/create');
	}
	// POST
	store(req, res, next) {
		const course = new Course(req.body);
		course
			.save()
			.then(() => res.redirect('/'))
			.catch(next);
	}
	edit(req, res, next) {
		Course.findById(req.params.id)
			.then((course) =>
				res.render('course/edit', {
					course: mongoseToObject(course),
				})
			)
			.catch(next);
	}
	//PUT
	update(req, res, next) {
		// res.json(req.body);
		Course.updateOne({ _id: req.params.id }, req.body)
			.then(() => res.redirect('/me/stored/courses'))
			.catch(next);
	}
	// delete /course/:id
	delete(req, res, next) {
		Course.deleteOne({ _id: req.params.id })
			.then(() => res.redirect('/me/stored/courses/'))
			.catch(next);
	}
}

module.exports = new NewsController();
