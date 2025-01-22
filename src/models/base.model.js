const DataConnect = require("./database")

class BaseModel {
    conn;
    constructor() {
        this.conn = DataConnect.connection();
    }

    querySQL(query) {
        const promise = new Promise((resolve, reject) => {
            this.conn.query(query, (error, results, fields) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });

        return promise;
    }
}

module.exports = BaseModel;