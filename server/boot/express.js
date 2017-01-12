const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const elevations = require('../routes/elevations');
const maps = require('../routes/maps');

const NODE_ENV = process.env.NODE_ENV;

module.exports = function bootExpress(app) {
  app.use(express.static(path.join(__dirname, '/../../public')));

  if (NODE_ENV !== 'test') {
    app.use(morgan('dev'));
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(cors());

  app.use('/api/elevations', elevations);
  app.use('/api/maps', maps);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use((err, req, res, next) => {
    if (req.app.get('env') !== 'development') {
      delete err.stack;
    }

    res.status(err.status || 500).json(err);
  });
};
