const logger = require('morgan');
const { app } = require('./app');

const PORT = 8080;

const msg = () => console.log('server up and running', process.env.NODE_ENV);

app.listen(PORT, msg);
