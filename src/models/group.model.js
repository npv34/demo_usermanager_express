const { GET_ALL_GROUP } = require("../constant/sql.query");
const BaseModel = require("./base.model");

class GroupModel extends BaseModel {
    constructor() {
        super();
    }

    async getAll() {
        const sql = GET_ALL_GROUP;
        return await this.querySQL(sql);
    }
}

module.exports = new GroupModel();