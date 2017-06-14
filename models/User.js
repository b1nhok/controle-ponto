const db = require('../config/database')();
const Schema = db.Schema;
const userSchema = new Schema({nome: String, profissao: String});
const User = db.model('user', userSchema);

module.exports = app => {
    let m = {};

    m.salvar = (params) => {
        let user = new User(params);
        user.save(err => {
            if(err) throw err;
            res.json({status: "ok", msg: "Salvo com sucesso"})
        })
    }

    return m;

}
