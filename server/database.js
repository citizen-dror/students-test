const mysql = require('mysql');

class Database {
    con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'mitav1'
    });
    constructor() {
        this.connect();
        // global.mongoose = mongoose
    }

    // eslint-disable-next-line class-methods-use-this
    connect() {
        this.con.connect((err) => {
            if (err) {
                console.log('Error connecting to Db');
            }
            console.log('Connection to Db established');
        });
    }
    disconnect() {
        this.con.end((err) => {
            // The connection is terminated gracefully
            // Ensures all remaining queries are executed
            // Then sends a quit packet to the MySQL server.
        });
    }
}

module.exports = new Database();





