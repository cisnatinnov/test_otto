const winston = require('winston');

// Create a custom logger
const logger = winston.createLogger({
  level: 'debug', // The default log level (info, debug, error, etc.)
  transports: [
    // Log to the console
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),  // Adds color to log levels
        winston.format.simple()     // Simple log format
      ),
    }),
    // Optional: Log to a file (e.g., app.log)
    new winston.transports.File({ filename: 'app.log' }),
  ],
});

const logRequest = (req, res, next) => {
  // Log the incoming request
  logger.info(`Incoming request: ${req.method} ${req.originalUrl}`);

  // Log request details for debugging (optional)
  logger.debug(`Request Body: ${JSON.stringify(req.body)}`);

  // Set up a listener to log when the response is sent
  res.on('finish', () => {
    logger.info(`Response sent: ${res.statusCode} ${res.statusMessage}`);
  });

  next();
};

// Middleware to log errors
const logError = (err, req, res, next) => {
  logger.error(`Error occurred: ${err.message}`);
  logger.error(`Stack trace: ${err.stack}`);
  
  res.status(500).json({ message: 'Internal Server Error' });
  next();
};

module.exports = { logRequest, logError };
