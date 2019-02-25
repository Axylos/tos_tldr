const express = require('express');
const { appRouter } = require('./routes/appRouter');

const app = express();
app.use(appRouter);

module.exports = {
  app,
};
