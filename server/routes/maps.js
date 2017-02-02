/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
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

  const result = Map.find({ owner: req.user._id }, projection).exec();

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

  const result = Map.findOne({ _id: req.params.id, owner: req.user._id }, projection).exec();

  result.then((map) => {
    if (map === null) {
      res.status(403);
      res.send({ errors: [{ status: 403, title: 'Update failed', detail: 'Could not update the requested map. Either it does not exist or you do not have permission to modify it.' }] });
    } else {
      res.send(map);
    }
  }).catch((err) => {
    res.status(500);
    res.send({ errors: [{ status: 500, title: 'An unexpected error occurred', detail: err }] });
  });
});

router.post('/', (req, res, next) => {
  req.body.owner = req.user._id;

  const result = new Map(req.body).save();

  result.then((map) => {
    res.send(map);
  }).catch((err) => {
    res.status(500);
    res.send({ errors: [{ status: 500, title: 'An unexpected error occurred', detail: err }] });
  });
});

router.put('/:id', (req, res, next) => {
  req.body.owner = req.user._id;

  const result = Map.findOneAndUpdate({ _id: req.params.id, owner: req.user._id }, req.body, { new: true }).exec();

  result.then((map) => {
    if (map === null) {
      res.status(403);
      res.send({ errors: [{ status: 403, title: 'Update failed', detail: 'Could not update the requested map. Either it does not exist or you do not have permission to modify it.' }] });
    } else {
      res.send(map);
    }
  }).catch((err) => {
    res.status(500);
    res.send({ errors: [{ status: 500, title: 'An unexpected error occurred', detail: err }] });
  });
});

router.delete('/:id', (req, res, next) => {
  req.body.owner = req.user._id;

  const result = Map.findOneAndRemove({ _id: req.params.id, owner: req.user._id }).exec();

  result.then((map) => {
    if (map === null) {
      res.status(403);
      res.send({ errors: [{ status: 403, title: 'Delete failed', detail: 'Could not delete the requested map. Either it does not exist or you do not have permission to modify it.' }] });
    } else {
      res.send(map);
    }
  }).catch((err) => {
    res.status(500);
    res.send({ errors: [{ status: 500, title: 'An unexpected error occurred', detail: err }] });
  });
});

module.exports = router;
