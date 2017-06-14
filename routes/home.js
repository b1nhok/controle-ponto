const homeController = require("../controllers/home")();

module.exports = app => {
    app.get("/", homeController.index);
    app.post("/salvar", homeController.save);
}
