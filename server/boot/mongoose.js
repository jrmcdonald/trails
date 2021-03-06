const mongoose = require('mongoose');

module.exports = function Mongoose(logger) {
  const DB_URI = process.env.MONGODB_URI;

  const connect = function connect(serverCallback) {
    const db = mongoose.connect(DB_URI).connection;

    db.on('error', err => logger.error(err));
    db.once('open', serverCallback);
  };

  return {
    connect,
  };
};
