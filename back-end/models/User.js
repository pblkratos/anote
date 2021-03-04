var knex = require("../database/connection");

class User{

    async insertUser(user){
        try{
            await knex.insert({userName: user.name, userPassword: user.password, userEmail: user.email}).table("users");
            return true;
        }catch(error){
            console.log(error);
            return false;
        }
    }

    async findUserByEmail(email){
        try{
            let hasUser = await knex.select(["userId", "userName", "userEmail"]).table("users").where({userEmail: email})
            return hasUser;
        }catch(error){
            console.log(error);
            return [];
        }
    }
}

module.exports = new User();