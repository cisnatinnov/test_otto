const cors = require('cors')
const express = require('express')
const app = express()
const rateLimit = require('express-rate-limit');
const { logRequest, logError } = require('./middlewares/logger');
// Middleware to parse JSON requests
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ limit: '200mb', extended: true, parameterLimit: 200000 }));

app.use(cors());
app.use(logRequest);
app.use(logError);

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10,
  message: "Too many requests, please try again later.",
});

const routes = require('./routes');

Object.keys(routes).forEach((route) => {
  app.use('/api/v1', limiter, routes[route]);
})

module.exports = app