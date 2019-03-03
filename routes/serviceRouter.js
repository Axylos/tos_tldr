const serviceRouter = require('express').Router();
const { fetchService } = require('../services/tos');
const { Experience, Comment } = require('../models');

serviceRouter.get('/:service/experiences', async (req, res) => {
  let data;
  const { service } = req.params;
  try {
    data = await fetchService(service);
    const { urls, links, pointsData } = data;
    const rows = await Experience.findAll({
      where: { 
        service_name: service 
      },
      include: [{ association: 'comments' }]
    });

    const results = rows.map(row => row.dataValues);
    res.json({ results });
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

module.exports = {
  serviceRouter,
};
