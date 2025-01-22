const BaseModel = require("./base.model");
const {GET_ALL_USER} = require("./../constant/sql.query");
class UserModel extends BaseModel {
    constructor() {
        super();
    }

    async getAll() {
        const sql = GET_ALL_USER;
        return await this.querySQL(sql);
    }

    async deleteUserByID(id) {
        const sql = `DELETE FROM users WHERE id = ${id}`;
        return await this.querySQL(sql);
    }

    async saveUser(data) {
        const {name, email, phone,city, money, group_id} = data;
        const sql = `INSERT INTO users (name, email, phone, city, money, group_id)
         VALUES ('${name}', '${email}', '${phone}', '${city}', ${money}, ${group_id})`;
         return await this.querySQL(sql);
    }

    async getUserByID(id) {
        const sql = `SELECT * FROM users WHERE id = ${id}`;
        return await this.querySQL(sql);
    }

    async updateUser(data, id) {
        const {name, email, phone, city, money} = data;
        const sql = `
        UPDATE users 
        SET name = '${name}', email = '${email}',
            phone = '${phone}', city = '${city}',
            money = ${money} 
        WHERE id = ${id}`;
        return await this.querySQL(sql);
    }

    async filterUsers(keyword) {
        const sql = `SELECT * FROM users
         WHERE name LIKE '%${keyword}%'
         OR email LIKE '%${keyword}%'`;
        return await this.querySQL(sql);
    }
}

module.exports = new UserModel();