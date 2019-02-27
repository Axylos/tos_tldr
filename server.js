const dotenv = require('dotenv');

dotenv.config();

const logger = require('morgan');
const { app } = require('./app');

const PORT = 8080;

app.use(logger('dev'));

const msg = () => console.log('server up and running');

app.listen(PORT, msg);
