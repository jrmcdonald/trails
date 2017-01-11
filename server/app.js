const config = require('config');
const fs = require('fs');
const express = require('express');
const join = require('path').join;
const logger = require('winston');

const app = express();

logger.level = config.get('App.config.level');

const models = join(__dirname, './models');

fs.readdirSync(models)
  .filter(file => ~file.search(/^[^\.].*\.js$/))
  .forEach(file => require(join(models, file)));

require('./boot/express')(app);

const server = require('./boot/server')(app, logger);
const db = require('./boot/mongoose')(logger);

db.connect(server.start);

module.exports = app;
