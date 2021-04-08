const dal = require('./cities_dal');

class CitiesService {
    async get() {
        return dal.get();
    }
}
module.exports = new CitiesService();