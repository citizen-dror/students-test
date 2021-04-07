
const db = require('./database');

class service_dal {
    get_cities = () => {
        db.con.query('SELECT * FROM cities', (err, rows) => {
            if (err) throw err;
            console.log(rows);
        });
    }
    get_students = () => {
        db.con.query('SELECT * FROM students', (err, rows) => {
            if (err) throw err;
            console.log(rows);
        });
    }
}

module.exports = new service_dal();
