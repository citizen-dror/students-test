const db = require('../../database');

class StudentsDal {
    get = async () => {
       const qSreing = 'SELECT * FROM students';
       const rows = await db.query(qSreing);
       return rows;
    }
}

module.exports = new StudentsDal();
