const userModel = require("../models/user.model");
const groupModel = require("../models/group.model");

class HomeController {
    static async index(req, res) {
        const {keyword}= req.query;
        let users = []; 
        if(keyword) {
            users = await userModel.filterUsers(keyword);
        }else{
            users = await userModel.getAll();
        }

        res.render('index', { users: users, keyword: keyword});
    }

    static async deleteUser(req, res) {
        const {id} = req.params;
        await userModel.deleteUserByID(id);
        res.redirect('/users'); 
    }

    static async createUser(req, res) {
        const groups = await groupModel.getAll();
        res.render('users/create.ejs', {groups: groups});  
    }

    static async storeUser(req, res) {
        const data = req.body;
        await userModel.saveUser(data);
        res.redirect('/users'); 
    }

    static async showFormEditUser(req, res) {
        const {id} = req.params;
        const user = await userModel.getUserByID(id);
        const groups = await groupModel.getAll();
        res.render('users/edit.ejs', {userEdit: user[0], groups: groups});  
    }

    static async editUser(req, res) {
        const data = req.body;
        const {id} = req.params;
        await userModel.updateUser(data, id);
        res.redirect('/users'); 
    }
} 

module.exports = HomeController;