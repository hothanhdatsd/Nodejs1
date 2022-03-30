const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/NodeJS');
        console.log("succsec");
    } catch (error) {
        console.log('failed');
    }
}

module.exports = { connect };