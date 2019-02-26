const express = require('express');
const cors = require('cors');
const { userParse } = require('./middlewares/userParse');
const { appRouter } = require('./routes/appRouter');
const { searchRouter } = require('./routes/searchRouter');

const app = express();
app.use(cors());
app.use(userParse);
app.use(appRouter);
app.use('/search', searchRouter);

module.exports = {
  app,
};
