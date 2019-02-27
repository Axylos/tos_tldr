const appRouter = require('express').Router();
const { Experience } = require('../models');

appRouter.get('/', async (req, res) => {
  try {
    const data = await Experience.findAll();
    res.locals.data = data;
  } catch (e) {
    console.log(e);
    res.locals.error = e.message;
  }
  res.json({ msg: 'Hello World!', user: res.locals });
});

module.exports = {
  appRouter,
};
