const experienceRouter = require('express').Router();

experienceRouter.post('/', async (req, res) => {
  res.json({ msg: 'ok' });
});

module.exports = {
  experienceRouter,
};
