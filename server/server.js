const loopback = require('loopback');
const boot = require('loopback-boot');

const setup = require('./setup');

const app = module.exports = loopback();

setup.cloudant('maps', (cloudantErr) => {
  if (cloudantErr) {
    console.log(cloudantErr);
    process.exit(1);
  }

  setup.elevations((elevationsErr) => {
    if (elevationsErr) {
      console.log(elevationsErr);
      process.exit(1);
    }

    app.start = function () {
      // start the web server
      return app.listen(() => {
        app.emit('started');
        const baseUrl = app.get('url').replace(/\/$/, '');
        console.log('Web server listening at: %s', baseUrl);
        const componentExplorer = app.get('loopback-component-explorer');
        if (componentExplorer) {
          console.log('Browse your REST API at %s%s', baseUrl, componentExplorer.mountPath);
        }
      });
    };

    // Bootstrap the application, configure models, datasources and middleware.
    // Sub-apps like REST API are mounted via boot scripts.
    boot(app, __dirname, (err) => {
      if (err) throw err;
      if (require.main === module) {
        app.start();
      }
    });
  });
});
