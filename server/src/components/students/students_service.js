const dal = require('./students_dal');

class StudentsService {
    async get() {
        return dal.get();
    }
}
module.exports = new StudentsService();