const mongoose = require("mongoose");
let db = null;

module.exports = app => {
    if(!db)
        db = mongoose.connect('mongodb://localhost:27017/blog');
    return db;
}
