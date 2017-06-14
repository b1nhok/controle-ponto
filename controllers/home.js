// const User = require("../models/User")();
const db = require('../config/database')();

module.exports = app => {
    const User = db.model("user");
    let controller = {};

    controller.index = (req, res) => {
        res.json({teste: "fadfadf"});
    }

    controller.save = (req, res) => {
        db.User.salvar(req.body);
    }

    return controller;
}
