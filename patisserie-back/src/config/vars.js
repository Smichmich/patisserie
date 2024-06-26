const path = require('path');
// import .env variables
require('dotenv').config({
  path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`),
  example: path.join(__dirname, '../../.env.example'),
  allowEmptyValues: true,
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  mongo: {
    uri: process.env.MONGO_URI,
  },
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};
