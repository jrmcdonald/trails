var cfenv = require('cfenv');
var Cloudant = require('cloudant');

var datasources = require('./datasources.json');

exports.setupDb = function(database, callback) {
  var cloudantURL = cfenv.getAppEnv().getServiceURL("trails-cloudantNoSQLDB", {}); 

  if (!cloudantURL) {
    callback("Error: No Cloudant URL defined.");
  }

  console.log('Setting up Cloudant.');

  var cloudant = Cloudant(cloudantURL);

  cloudant.db.create(database, function(err) {
    datasources.cloudant = {
      name: "cloudant",
      connector: "cloudant",
      database: database,
      url: cloudantURL
    }

    callback(null);
  });
}