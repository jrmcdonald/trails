const config = require('config');
const express = require('express');
const request = require('request');

const router = express.Router();

const BASE_URL = config.get('Elevations.api.url');
const API_KEY = config.get('Elevations.api.key');

/* GET home page. */
router.get('/list', (req, res, next) => {
  req.query.key = API_KEY;
  req.pipe(request({ url: `${BASE_URL}/List`, qs: req.query, method: req.method })).pipe(res);
});

module.exports = router;
