const db = require('../../database');

class StudentsDal {
    get = async () => {
       const qSreing = 'SELECT students.*, cities.city_name FROM students INNER JOIN cities ON (students.city_id  = cities.city_id)';
       const rows = await db.query(qSreing);
       return rows;
    }
}

module.exports = new StudentsDal();
