const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const logger = require('winston');

const router = express.Router();

const User = mongoose.model('User');

mongoose.Promise = global.Promise;

router.post('/', (req, res, next) => {
  const emailLower = req.body.email.toLowerCase();
  const result = User.findOne({ email: emailLower }).exec();

  result.then((user) => {
    if (!user) {
      res.status(403);
      res.send({ errors: [{ status: 403, title: 'Authentication Failed', detail: 'Please provide a valid username and password.' }] });
    } else {
      const compare = user.comparePassword(req.body.password);

      compare.then((match) => {
        if (match) {
          const token = jwt.sign({ id: user._id, email: user.email }, process.env.APP_AUTH_SECRET, { expiresIn: 10080 });

          res.send({ data: { token } });
        } else {
          res.status(403);
          res.send({ errors: [{ status: 403, title: 'Authentication Failed', detail: 'Please provide a valid username and password.' }] });
        }
      }).catch((err) => {
        logger.error(err);

        res.status(500);
        res.send({ errors: [{ status: 500, title: 'Authentication Failed', detail: 'An unexpected error occurred during authentication. Please try again.' }] });
      });
    }
  }).catch((err) => {
    logger.error(err);

    res.status(500);
    res.send({ errors: [{ status: 500, title: 'Authentication Failed', detail: 'An unexpected error occurred during authentication. Please try again.' }] });
  });
});

module.exports = router;
