const appRouter = require('express').Router();

appRouter.get('/', (req, res) => res.json({ msg: 'Hello World!', user: res.locals.user }));

module.exports = {
  appRouter,
};
