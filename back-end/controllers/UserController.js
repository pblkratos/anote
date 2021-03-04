var User = require("../models/User");
var bcrypt = require("bcrypt");

class UserController{

    constructor(){

    }

    async login(req, res){
        var {user, password} = req.body;

        if(user == "" || password == ""){
            res.status(400);
            res.json({status: "warning", msg: "Preencha todos os campos"});
            return;
        }
    }

    async register(req, res){
        let user = req.body;

        let hasUser = await User.findUserByEmail(user.email);

        if(hasUser == ""){
            user.password = await bcrypt.hash(user.password, 10);

            let userRegister = await User.insertUser(user);

            if(userRegister){
                res.status(200);
                res.json({status: "success", msg: "Usuário cadastrado com sucesso!"});
                return;
            }            
        }else{
            res.status(400);
            res.json({status: "alert", msg: "Usuário já está cadastrado no banco de dados!"})
            return;
        }
    }
}

module.exports = new UserController();