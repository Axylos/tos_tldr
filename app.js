const express = require('express');
const cors = require('cors');
const { appRouter } = require('./routes/appRouter');
const { searchRouter } = require('./routes/searchRouter');

const app = express();
app.use(cors());
app.use(appRouter);
app.use('/search', searchRouter);

module.exports = {
  app,
};
