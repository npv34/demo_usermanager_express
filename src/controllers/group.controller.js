const groupModel = require("../models/group.model");

class GroupController {
    static async showListGroup(req, res) {
        const groups = await groupModel.getTotalUserOfGroup();
        res.render('groups/list.ejs', { groups: groups });
    }
}

module.exports = GroupController;