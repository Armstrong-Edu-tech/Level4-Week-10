import winston from 'winston';

const logger = winston.createLogger({
  level: 'info', // Default log level
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

logger.info('Winston logger initialized!');