const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const path = require('path');
// const helmet = require('helmet');
const routes = require('../api/routes/v1');
const { logs } = require('./vars');
const error = require('../api/middlewares/error');

/**
* Express instance
* @public
*/
const app = express();

// request logging. dev: console | production: file
app.use(morgan(logs));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// // secure apps by setting various HTTP headers
// app.use(helmet.contentSecurityPolicy({
//   directives: {
//     defaultSrc: ['self'],
//     scriptSrc: ['self', 'unsafe-inline', 'example.com'],
//     styleSrc: ['self', 'unsafe-inline'],
//     imgSrc: ['self', 'example.com'],
//     connectSrc: ['self'],
//     fontSrc: ['self'],
//     objectSrc: ['none'],
//     mediaSrc: ['self'],
//   },
// }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// Serve public dir static files
app.use(express.static(path.join(__dirname, '..', 'public')));

// mount api v1 routes
app.use('/v1', routes);

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

module.exports = app;
