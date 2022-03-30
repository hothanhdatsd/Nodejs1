/** @format */

module.exports = function (req, res, next) {
	if (req.session.loggedin && req.session?.user) {
		next();
	} else {
		res.redirect('/user/signin');
	}
};
