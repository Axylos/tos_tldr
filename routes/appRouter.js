const appRouter = require('express').Router();

appRouter.get('/', (req, res) => res.json({ msg: 'Hello World!' }));

module.exports = {
  appRouter,
};
