const { GET_ALL_GROUP, GET_ALL_GROUP_WITH_TOTAL_USER } = require("../constant/sql.query");
const BaseModel = require("./base.model");

class GroupModel extends BaseModel {
    constructor() {
        super();
    }

    async getAll() {
        const sql = GET_ALL_GROUP;
        return await this.querySQL(sql);
    }

    async getTotalUserOfGroup() {
        const sql = GET_ALL_GROUP_WITH_TOTAL_USER;
        return await this.querySQL(sql);
    }
}

module.exports = new GroupModel();