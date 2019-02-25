const logger = require('morgan');
const { app } = require('./app');

const PORT = 3000;

const msg = () => console.log('server up and running');

app.listen(PORT, msg);
