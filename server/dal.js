const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'mitav1'
});

con.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
    }
    console.log('Connection to Db established');
});

const get_cities = () =>{
    con.query('SELECT * FROM cities', (err,rows) => {
        if(err) throw err;
        console.log(rows);
      });
}
const get_students = () =>{
    con.query('SELECT * FROM students', (err,rows) => {
        if(err) throw err;
        console.log(rows);
      });
}

get_cities();
get_students();

con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
});