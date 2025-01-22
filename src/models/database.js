const mysql = require('mysql');

class DataConnect {
    connection() {
        let conn = null;
        try {
            conn =  mysql.createConnection({
                host     : 'localhost',
                user     : 'root',
                password : '123456@Abc',
                database : 'shop'
              });
            console.log("Connect database successfully");
        }catch (e) {
            console.log("Connection error: " + e.message);
        }
        return conn;
    }
}

module.exports = new DataConnect();