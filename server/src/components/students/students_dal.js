const db = require('../../database');

class StudentsDal {
    get = async () => {
        const sql = 'SELECT students.*, cities.city_name FROM students INNER JOIN cities ON (students.city_id  = cities.city_id)';
        const rows = await db.query(sql);
        return rows;
    }
    insert = async (student) => {
        var sql = 'INSERT INTO students SET ?'
        // var sql = "INSERT INTO students (first_name, last_name, birth_date, israel_id, city_id) VALUES ('Company Inc', 'Highway 37')";
        const rows = await db.query(sql, student);
        console.log(rows);
        return rows;
    }
}

module.exports = new StudentsDal();
