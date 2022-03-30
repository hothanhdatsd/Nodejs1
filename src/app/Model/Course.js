const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Course = new mongoose.Schema({
    Name: {
        type: String,
        maxlength: 250
    },
    desc: {
        type: String
    },
    Image: {
        type: String
    },
    image: {
        type: String
    },
    Created: {
        type: Date,
        default: Date.now
    },
    videoID: {
        type: String
    },
    slug: {
        type: String,
        slug: "Name",
        unique: true
    },
    price: {
        type: String
    },
    condition: {
        type: String
    },
    count: {
        type: Number
    }
}, {
    collection: 'Course'
});

module.exports = mongoose.model('Course', Course);