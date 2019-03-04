const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { userParse } = require('./middlewares/userParse');
const { appRouter } = require('./routes/appRouter');
const { experienceRouter } = require('./routes/experienceRouter');
const { serviceRouter } = require('./routes/serviceRouter');
const { userRouter } = require('./routes/userRouter');
const { searchRouter } = require('./routes/searchRouter');

const app = express();
app.use(cors());
app.use(userParse);
app.use(appRouter);
app.use(bodyParser.json());
app.use('/experiences', experienceRouter);
app.use('/user', userRouter);
app.use('/search', searchRouter);
app.use('/services', serviceRouter);

module.exports = {
  app,
};
