/* eslint-disable func-names, prefer-arrow-callback */
const chai = require('chai');
const chaiPromised = require('chai-as-promised');
const expect = require('chai').expect;
const fs = require('fs');
const join = require('path').join;
const mongoose = require('mongoose');

require('../../app');

chai.use(chaiPromised);

const file = join(__dirname, '../data/simple-map-2-features.json');
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const Map = mongoose.model('Map');

mongoose.Promise = global.Promise;

describe('Map Model Tests', function () {
  describe('Validation Tests', function () {
    it('should allow valid data', function () {
      const map = new Map(data);
      return expect(map.validate()).to.be.fulfilled;
    });

    it('should require map.name', function () {
      const copiedData = JSON.parse(JSON.stringify(data));
      delete copiedData.name;

      const map = new Map(copiedData);
      return expect(map.validate()).to.be.rejected;
    });

    it('should require map.data.type to be "FeatureCollection"', function () {
      const copiedData = JSON.parse(JSON.stringify(data));
      copiedData.data.type = 'InvalidValue';

      const map = new Map(copiedData);
      return expect(map.validate()).to.be.rejected;
    });

    it('should allow map.data.features to be empty', function () {
      const copiedData = JSON.parse(JSON.stringify(data));
      copiedData.data.features = [];

      const map = new Map(copiedData);
      return expect(map.validate()).to.be.fulfilled;
    });

    it('should require map.data.features[n].type to be "Feature"', function () {
      const copiedData = JSON.parse(JSON.stringify(data));
      copiedData.data.features[0].type = 'InvalidValue';

      const map = new Map(copiedData);
      return expect(map.validate()).to.be.rejected;
    });

    it('should require map.data.features[n].properties.name', function () {
      const copiedData = JSON.parse(JSON.stringify(data));
      delete copiedData.data.features[0].properties.name;

      const map = new Map(copiedData);
      return expect(map.validate()).to.be.rejected;
    });

    it('should require map.data.features[n].properties.name to be a String', function () {
      const copiedData = JSON.parse(JSON.stringify(data));
      copiedData.data.features[0].properties.name = [];

      const map = new Map(copiedData);
      return expect(map.validate()).to.be.rejected;
    });

    it('should require map.data.features[n].geometry.type', function () {
      const copiedData = JSON.parse(JSON.stringify(data));
      delete copiedData.data.features[0].geometry.type;

      const map = new Map(copiedData);
      return expect(map.validate()).to.be.rejected;
    });

    it('should require map.data.features[n].geometry.type to be a String', function () {
      const copiedData = JSON.parse(JSON.stringify(data));
      copiedData.data.features[0].geometry.type = [];

      const map = new Map(copiedData);
      return expect(map.validate()).to.be.rejected;
    });

    it('should require map.data.features[n].geometry.coordinates to not be empty', function () {
      const copiedData = JSON.parse(JSON.stringify(data));
      copiedData.data.features[0].geometry.coordinates = [];

      const map = new Map(copiedData);
      return expect(map.validate()).to.be.rejected;
    });

    it('should require map.data.features[n].geometry.coordinates to be valid (>1)', function () {
      const copiedData = JSON.parse(JSON.stringify(data));
      copiedData.data.features[0].geometry.coordinates[0] = [-4.078014492988587];

      const map = new Map(copiedData);
      return expect(map.validate()).to.be.fulfilled;
    });

    it('should require map.data.features[n].geometry.coordinates to be valid (<3)', function () {
      const copiedData = JSON.parse(JSON.stringify(data));
      copiedData.data.features[0].geometry.coordinates[0] = [-4.078014492988587, 53.0686355323667, 1, 1];

      const map = new Map(copiedData);
      return expect(map.validate()).to.be.fulfilled;
    });
  });

  describe('Functions Tests', function () {
    // after(function () {
    //   return expect(Map.remove({})).to.be.fulfilled;
    // });

    it('should save maps to the database', function () {
      return expect(Map.create(data)).to.be.fulfilled;
    });
  });
});
