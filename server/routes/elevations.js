const express = require('express');
const request = require('request');

const router = express.Router();

const BASE_URL = process.env.ELEVATIONS_API_URI;
const API_KEY = process.env.ELEVATIONS_API_KEY;

/* GET home page. */
router.get('/list', (req, res, next) => {
  if (typeof req.query.points === 'undefined' || req.query.points === '') {
    res.status(400);
    res.send({ errors: [{ status: 400, title: 'Invalid query string', detail: 'Points parameter is expected and must not be empty.' }] });
  } else {
    const options = {
      url: `${BASE_URL}/List`,
      qs: req.query,
      method: req.method.toLowerCase(),
    };

    req.query.key = API_KEY;
    req.pipe(request(options)).pipe(res);
  }
});

router.post('/list', (req, res, next) => {
  if (typeof req.body.points === 'undefined' || req.body.points === '') {
    res.status(400);
    res.send({ errors: [{ status: 400, title: 'Invalid body', detail: 'Points parameter is expected and must not be empty.' }] });
  } else {
    const pointString = `points=${req.body.points}`;
    const options = {
      url: `${BASE_URL}/List?key=${API_KEY}`,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Length': pointString.length,
      },
      body: pointString,
      method: req.method.toLowerCase(),
    };

    req.pipe(request(options), { end: false }).pipe(res);
  }
});

module.exports = router;
