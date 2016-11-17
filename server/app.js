const config = require('config');
const express = require('express');
const logger = require('winston');

const app = express();

logger.level = config.get('App.config.level');

require('./boot/express')(app);

const server = require('./boot/server')(app, logger);

server.start();

exports.module = app;
