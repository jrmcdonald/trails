var loopback = require('loopback');
var boot = require('loopback-boot');

var bluemix = require('./bluemix');

var app = module.exports = loopback();

bluemix.setupDb('maps', function(err) {
	if(err) {
		console.log(err);
		process.exit(1);
	}

	app.start = function () {
		// start the web server
		return app.listen(function () {
			app.emit('started');
			var baseUrl = app.get('url').replace(/\/$/, '');
			console.log('Web server listening at: %s', baseUrl);
			var componentExplorer = app.get('loopback-component-explorer');
			if (componentExplorer) {
				console.log('Browse your REST API at %s%s', baseUrl, componentExplorer.mountPath);
			}
		});
	};

	// Bootstrap the application, configure models, datasources and middleware.
	// Sub-apps like REST API are mounted via boot scripts.
	boot(app, __dirname, function (err) {
		if (err) throw err;
		if (require.main === module)
			app.start();
	});
});