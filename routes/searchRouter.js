const axios = require('axios');
const searchRouter = require('express').Router();

const BASE_URL = 'https://tosdr.org/api/1/service';

const api = axios.create({
  baseURL: BASE_URL,
});

searchRouter.get('/', async (req, res) => {
  const { service } = req.query;
  if (service !== undefined) {
    try {
      const resp = await api(`/${service}.json`);
      const { data } = resp;
      const { urls, links, pointsData } = data;
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
