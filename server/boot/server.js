const http = require('http');

const port = process.env.PORT || 8080;
const listen = (process.env.APP_CONFIG_LISTEN === 'true');

module.exports = function Server(app, logger) {
  const server = http.createServer(app);

  const onServerError = function onServerError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = typeof port === 'string'
      ? `Pipe ${port}`
      : `Port '${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        logger.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        logger.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

  const onServerListen = function onServerListen() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? `pipe ${addr}`
        : `port ${addr.port}`;

    logger.info(`Listening on ${bind}`);
  };

  const start = function start() {
    if (!listen) return;
    server.listen(port);
    server.on('error', onServerError);
    server.on('listening', onServerListen);
  };

  return {
    start,
  };
};
