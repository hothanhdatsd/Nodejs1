const res = require("express/lib/response");
const { renderSync } = require("node-sass");
const Course = require("../Model/Course");
const { mongoseToObject, mutipleMongooseToObject } = require("../../util/mongoese");

class PageController {
    index(req, res, next) {
        let perPage = 8;
        let page = req.params.page || 1;

        Course
            .find() // find tất cả các data
            .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
            .limit(perPage)
            .exec((err, course) => {
                Course.countDocuments((err, count) => { // đếm để tính có bao nhiêu trang
                    if (err) return next(err);
                    res.render('course/page', {
                        course: mutipleMongooseToObject(course)
                    });
                });
            });
    }
}
module.exports = new PageController();