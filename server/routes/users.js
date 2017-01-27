const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const User = mongoose.model('User');

mongoose.Promise = global.Promise;

router.post('/', (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    res.status(400);
    res.send({ errors: [{ status: 400, title: 'User Creation Failed', detail: 'Please provide a username and password.' }] });

    return;
  }

  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  const result = newUser.save();

  result.then((user) => {
    res.status(201);
    res.send({ data: { message: 'User created successfully. ' } });
  }).catch((err) => {
    res.status(409);
    res.send({ errors: [{ status: 409, title: 'User Creation Failed', detail: 'User already exists.' }] });
  });
});

module.exports = router;
