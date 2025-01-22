class GroupController {
    static showListGroup(req, res) {
        res.render('groups/list.ejs');
    }
}

module.exports = GroupController;