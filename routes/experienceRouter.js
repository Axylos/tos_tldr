const experienceRouter = require('express').Router();
const { Experience } = require('../models');

experienceRouter.post('/', async (req, res) => {
  try {
    const { user } = res.locals;
    console.log(user);
    const data = {
      ...req.body,
      user_id: user.id
    }
    const result = await Experience.create(data);
    res.json({ experience: result });
  } catch (e) {
    console.log('error: ', e.message);
    res.status(500).send(e.message);
  }
});

module.exports = {
  experienceRouter,
};
