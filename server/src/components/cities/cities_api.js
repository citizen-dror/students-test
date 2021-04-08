const { Router } = require('express') ;
const service = require('./cities_service');

const router = Router();

const citiesRoute = (app) => {
  app.use('/api/v1/cities', router);

  //controlers
  router.get('/', async (req, res) => {
    const doc = await service.get();
    return res.jsonp(doc);
  });
}
module.exports = {citiesRoute};