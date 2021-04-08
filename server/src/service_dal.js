
const db = require('./database');

class service_dal {
    get_cities = async () => {
        const qSreing = 'SELECT * FROM cities';
        const rows = await db.query(qSreing);
        return rows;
    }
    get_students = async () => {
       const qSreing = 'SELECT * FROM students';
       const rows = await db.query(qSreing);
       return rows;
    }
}

module.exports = new service_dal();
