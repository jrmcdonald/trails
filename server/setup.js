const cfenv = require('cfenv');
const Cloudant = require('cloudant');

const datasources = require('./datasources.json');

exports.cloudant = function cloudant(database, callback) {
  let cloudantURL = cfenv.getAppEnv().getServiceURL('trails-cloudantNoSQLDB', {}); 

  if (!cloudantURL) {
    cloudantURL = process.env.CLOUDANT_URL;

    if (!cloudantURL) {
      callback('Error: No Cloudant URL defined. Must be defined in VCAP_SERVICES or local environment variables.');
    }
  }

  console.log('Setting up Cloudant datasource.');

  const cloudantDb = new Cloudant(cloudantURL);

  cloudantDb.db.create(database, () => {
    datasources.cloudant = {
      name: 'cloudant',
      connector: 'cloudant',
      database,
      url: cloudantURL,
    };

    callback(null);
  });
};

exports.elevations = function elevations(callback) {
  const bingApiKey = process.env.BING_KEY;

  if (!bingApiKey) {
    callback('Error: No Bing Maps API Key defined. Must be defined in VCAP_SERVICES or local environment variables.');
  }

  console.log('Setting up Bing Elevations API datasource.');

  datasources.elevations = {
    name: 'elevations',
    connector: 'rest',
    operations: [
      {
        template: {
          method: 'GET',
          url: 'http://dev.virtualearth.net/REST/v1/Elevation/List',
          query: {
            points: '{points}',
            key: bingApiKey,
          },
        },
        functions: {
          list: [
            'points',
          ],
        },
      },
    ],
  };

  callback(null);
};
