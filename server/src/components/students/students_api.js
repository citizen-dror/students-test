const { Router } = require('express') ;
const service = require('./students_service');

const router = Router();

const studentsRoute = (app) => {
  app.use('/api/v1/students', router);

  //controlers
  router.get('/', async (req, res) => {
    const doc = await service.get();
    return res.jsonp(doc);
  });
}
module.exports = {studentsRoute};