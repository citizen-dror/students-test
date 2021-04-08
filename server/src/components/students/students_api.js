const { Router, json, urlencoded } = require('express') ;
const service = require('./students_service');

// create application/json parser
const router = Router();

module.exports = (app) => {
  app.use(json());
  app.use(urlencoded({
    extended: true
  }));
  app.use('/api/v1/students', router);

  //controlers
  router.get('/', async (req, res) => {
    const doc = await service.get();
    return res.jsonp(doc); 
  });

  router.post('/add', async (req, res) => {
    if (!req.body) {
      return res.status(400).send('request body is missing!');
    }
    const obj = req.body;
    const doc = await service.insert(obj);
    return res.jsonp(doc);
  });
 
}
// module.exports = studentsRoute;