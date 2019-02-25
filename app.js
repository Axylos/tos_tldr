const express = require('express');
const { appRouter } = require('./routes/appRouter');
const { searchRouter } = require('./routes/searchRouter');

const app = express();
app.use(appRouter);
app.use('/search', searchRouter);

module.exports = {
  app,
};
