const config = require('config');
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Map = mongoose.model('Map');

mongoose.Promise = global.Promise;

router.get('/', (req, res, next) => {
  let projection = {};

  if (typeof req.query.filter !== 'undefined') {
    let filter = {};

    try {
      filter = JSON.parse(req.query.filter);
      projection = filter.fields;
    } catch (e) {
      res.status(400);
      res.send({ errors: [{ status: 400, title: 'Invalid query string', detail: 'Unable to parse filter parameter.' }] });

      return;
    }
  }

  const result = Map.find({}, projection).exec();

  result.then((maps) => {
    res.send(maps);
  }).catch((err) => {
    res.status(500);
    res.send({ errors: [{ status: 500, title: 'An unexpected error occurred', detail: err }] });
  });
});

router.get('/:id', (req, res, next) => {
  let projection = {};

  if (typeof req.query.filter !== 'undefined') {
    let filter = {};

    try {
      filter = JSON.parse(req.query.filter);
      projection = filter.fields;
    } catch (e) {
      res.status(400);
      res.send({ errors: [{ status: 400, title: 'Invalid query string', detail: 'Unable to parse filter parameter.' }] });

      return;
    }
  }

  const result = Map.findById(req.params.id, projection).exec();

  result.then((map) => {
    res.send(map);
  }).catch((err) => {
    res.status(500);
    res.send({ errors: [{ status: 500, title: 'An unexpected error occurred', detail: err }] });
  });
});

router.post('/', (req, res, next) => {
  const result = new Map(req.body).save();

  result.then((map) => {
    res.send(map);
  }).catch((err) => {
    res.status(500);
    res.send({ errors: [{ status: 500, title: 'An unexpected error occurred', detail: err }] });
  });
});

router.put('/:id', (req, res, next) => {
  const result = Map.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();

  result.then((map) => {
    res.send(map);
  }).catch((err) => {
    res.status(500);
    res.send({ errors: [{ status: 500, title: 'An unexpected error occurred', detail: err }] });
  });
});

router.delete('/:id', (req, res, next) => {
  const result = Map.findByIdAndRemove(req.params.id).exec();

  result.then((map) => {
    res.send(map);
  }).catch((err) => {
    res.status(500);
    res.send({ errors: [{ status: 500, title: 'An unexpected error occurred', detail: err }] });
  });
});

module.exports = router;
