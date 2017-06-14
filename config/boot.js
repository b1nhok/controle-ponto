module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log('Tudo certo!! -> rodando na porta ' + app.get("port"));
    });
}
