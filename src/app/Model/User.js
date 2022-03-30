/** @format */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		name: { type: String, maxlength: 250 },
		email: { type: String, maxlength: 250 },
		password: { type: String, maxlength: 250 },
		address: { type: String, maxlength: 250 },
		city: { type: String, maxlength: 250 },
		district: { type: String, maxlength: 250 },
		phone: { type: String, maxlength: 250 },
	},
	{ collection: 'User' }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
