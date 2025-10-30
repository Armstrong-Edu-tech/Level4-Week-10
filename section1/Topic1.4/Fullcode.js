// app.js
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({ level: 'debug' }),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// Example logs
logger.debug('Debugging log');
logger.info('Server is starting');
logger.warn('This is a warning');
logger.error('An error occurred');

app.get('/', (req, res) => {
  res.send('Welcome to Logging and Debugging Demo');
});
app.get('/test', (req, res) => {
  logger.info('Test route was accessed');
  res.send('Check your console and log files!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

