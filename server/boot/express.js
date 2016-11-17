const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const elevations = require('../routes/elevations');

module.exports = function bootExpress(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use('/elevations', elevations);

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
