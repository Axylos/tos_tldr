const searchRouter = require('express').Router();
const tosService = require('../services/tos');

searchRouter.get('/', async (req, res) => {
  const { service } = req.query;
  if (service !== undefined) {
    try {
      const { urls, links, pointsData } = await tosService.fetchService(service);
      res.json({
        service: {
          urls,
          links,
          name: service,
          points: Object.values(pointsData),
        },
      });
    } catch (e) {
      res.status(500).send(`Invalid tos api call: ${e.message}`);
    }
  } else {
    res.status(400).send('Invalid service param');
  }
});

module.exports = {
  searchRouter,
};
