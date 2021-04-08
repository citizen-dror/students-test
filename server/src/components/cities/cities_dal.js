const db = require('../../database');

class CitiesDal {
    get = async () => {
       const qSreing = 'SELECT * FROM cities';
       const rows = await db.query(qSreing);
       return rows;
    }
}

module.exports = new CitiesDal();