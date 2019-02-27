const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { userParse } = require('./middlewares/userParse');
const { appRouter } = require('./routes/appRouter');
const { experienceRouter } = require('./routes/experienceRouter');
const { searchRouter } = require('./routes/searchRouter');

const app = express();
app.use(cors());
app.use(userParse);
app.use(appRouter);
app.use(bodyParser.json());
app.use('/experiences', experienceRouter);
app.use('/search', searchRouter);

module.exports = {
  app,
};
