const e = require("express");
const res = require("express/lib/response");
const Course = require("../Model/Course");
const { mutipleMongooseToObject } = require("../../util/mongoese");

class siteController {
    // GET site
    index(req, res, next) {
        let perPage = 8;
        let page = req.params.page || 1;

        Course
            .find()
            .limit(perPage)
            .exec((err, course) => {
                Course.countDocuments((err, count) => {
                    res.render('course/page', {
                        course: mutipleMongooseToObject(course)
                    });
                });
            });
    }


}
module.exports = new siteController();