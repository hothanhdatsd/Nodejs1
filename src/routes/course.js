const express = require('express');
const route = express.Router();

const CourseController = require('../app/controllers/CourseController')


route.get('/create', CourseController.create);
route.post('/store', CourseController.store);
route.get('/:slug', CourseController.show);
route.get('/:id/edit', CourseController.edit);
route.put('/:id', CourseController.update);
route.get('/:id/delete', CourseController.delete);






module.exports = route;