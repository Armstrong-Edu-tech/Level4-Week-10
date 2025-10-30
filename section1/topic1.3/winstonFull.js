import winston from 'winston';
// Create logger instance
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({ level: 'debug' }), // logs everything in console
    new winston.transports.File({ filename: 'error.log', level: 'error' }), // only error logs
    new winston.transports.File({ filename: 'combined.log' }) // all logs
  ]
});

// Sample logs
logger.debug('This is a debug message');      // visible only in console
logger.info('App started successfully');       // logged everywhere
logger.warn('Warning! Disk space is low');     // logged everywhere
logger.error('Server crashed unexpectedly');   // logged in all transports including error.log


