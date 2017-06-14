const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const consign = require("consign");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

consign()
    .include('config/app.js')
    .include('config/database.js')
    .then("config/boot.js")
    .then('routes')
    .then('models')
    .then('controllers')
    .into(app);
