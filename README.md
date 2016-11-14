# Trails

## Overview

Simple trail mapping application created using Angular, Leaflet.js, LoopBack & Bluemix. 

## Features

- Easily draw trails on a map and export them to GeoJSON, GPX or KML files.
- Save routes for loading/editing again later.

## Installation

### Getting setup with Bluemix

1. Make sure you have IBM Bluemix account.

2. Make sure you have Cloud Foundry CLI tool installed.

3. Open a terminal and verify that cf tool is available by running `cf --version`.

4. Setup cf tool to work with a Bluemix API server of your choice, for instance `cf api https://api.ng.bluemix.net`. Use following URLs for other Bluemix regions:
    - US-SOUTH: https://api.ng.bluemix.net
    - UNITED KINGDOM: https://api.en-gb.bluemix.net
    - SYDNEY: https://api.au-syd.bluemix.net

5. Login with your Bluemix credentials and pick your organization and space by running `cf login`.

6. Make sure you're in a right region, organization and space by running `cf target`.

### Clone and Deploy

1. Clone this repository to your local disk

    ```git clone https://github.com/jrmcdonald/trails```

2. Edit `manifest.yml` file. Change the host property to a unique value. There may be other applications deployed to Bluemix with the same host name, causing your deployment to fail.

3. Deploy to Bluemix using `cf push`. 

4. Check the deployed apps using `cf apps`.

5. Your Bluemix application should be available at https//{hostname-from-manifest.yml}.mybluemix.net.

## Todo

- [x] Error handling for service calls.
- [x] Delete saved maps.
- [ ] Passport authentication for API.
- [ ] Elevation data using Bing Elevation API.
- [ ] Import data from GeoJSON, GPX or KML files.
- [x] Search for map destinations.

## Notes

If using the lite offering of Cloudant on Bluemix, the Loopback Cloudant Connector may encounter rate limits (5 queries/sec) whilst creating indexes.

In `loopback-connector-cloudant/lib/cloudant.js`:

```javascript
Cloudant.prototype.define = function(modelDefinition) {
  var modelName = modelDefinition.model.modelName;
  modelDefinition.settings = modelDefinition.settings || {};
  this._models[modelName] = modelDefinition;
  var mo = this.selectModel(modelName, true);
  var self = this;
  this.updateIndex(mo, modelName, function indexCallback(err, res) {
    if (err) {
      if (err.statusCode === 429) {
        setTimeout(function() {
          self.updateIndex(mo, modelName, indexCallback);
        }, 1000);
      }
    }
  });
};
```