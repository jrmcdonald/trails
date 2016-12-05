const config = require('config');
const express = require('express');
const request = require('request');

const router = express.Router();

const BASE_URL = config.get('Elevations.api.url');
const API_KEY = config.get('Elevations.api.key');

/* GET home page. */
router.get('/list', (req, res, next) => {
  if (typeof req.query.points === 'undefined' || req.query.points === '') {
    res.status(400);
    res.send({ errors: [{ status: 400, title: 'Invalid query string', detail: 'Points parameter is expected and must not be empty.' }] });
  } else {
    req.query.key = API_KEY;
    req.pipe(request({ url: `${BASE_URL}/List`, qs: req.query, method: req.method })).pipe(res);
  }

});

module.exports = router;
