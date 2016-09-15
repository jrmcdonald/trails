Note if using the lite offering of Cloudant on Bluemix, the Loopback Cloudant Connector may encounter rate limits (5 queries/sec) whilst creating indexes.

// loopback-connector-cloudant/lib/cloudant.js

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