module.exports = {
    mutipleMongooseToObject: function(mongoosesArray) {
        return mongoosesArray.map(mongoose => mongoose.toObject());
    },
    mongoseToObject: function(mongoosesArray) {
        return mongoosesArray ? mongoosesArray.toObject() : mongoosesArray;
    },
};