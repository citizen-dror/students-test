const dal = require('./students_dal');

class StudentsService {
    async get() {
        return dal.get();
    }
    async insert(obj) {
        const { first_name, last_name, birth_date, israel_id, city_id } = obj;
        if (first_name && last_name && birth_date && israel_id && city_id) {
            const student = { first_name: first_name, last_name: last_name, birth_date: birth_date, israel_id: israel_id, city_id: city_id }
            const res = dal.insert(student);
            return res;
        }
        else {
            console.log("missing fild on StudentsService insert");
            return 0;
        }

    }
}
module.exports = new StudentsService();