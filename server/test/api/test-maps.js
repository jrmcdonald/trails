/* eslint-disable func-names, prefer-arrow-callback */
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiPromised = require('chai-as-promised');
const expect = require('chai').expect;
const fs = require('fs');
const join = require('path').join;
const mongoose = require('mongoose');

const app = require('../../app');

chai.use(chaiHttp);
chai.use(chaiPromised);

const file = join(__dirname, '../data/multiple-maps.json');
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const Map = mongoose.model('Map');

mongoose.Promise = global.Promise;

describe('Maps API Tests', function () {
  const mapIds = [];

  before(function () {
    const promises = [];

    promises.push(Map.remove({}));

    for (const map of data.maps) {
      const model = new Map(map);
      mapIds.push(model._id);
      promises.push(model.save());
    }

    return expect(Promise.all(promises)).to.be.fulfilled;
  });

  after(function () {
    return expect(Map.remove({})).to.be.fulfilled;
  });

  it('should return an unfiltered collection of maps', function () {
    const p = chai.request(app)
      .get('/api/maps')
      .then((res) => {
        expect(res.body).to.have.length(2);
        expect(res.body[0]).to.have.property('data');
      });

    return expect(p).to.be.fulfilled;
  });

  it('should return a filtered collection of maps', function () {
    const p = chai.request(app)
      .get('/api/maps')
      .query({ filter: '{ "fields": {"name": 1} }' })
      .then((res) => {
        expect(res.body).to.have.length(2);
        expect(res.body[0]).to.not.have.property('data');
      });

    return expect(p).to.be.fulfilled;
  });

  it('should return an error when passed an invalid filter', function () {
    const p = chai.request(app)
      .get('/api/maps')
      .query({ filter: '{ fields: {"name": 1} }' })
      .catch((err) => {
        expect(err).to.have.status(400);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should return an unfiltered single map', function () {
    const p = chai.request(app)
      .get(`/api/maps/${mapIds[0]}`)
      .then((res) => {
        expect(res.body.name).to.equal(data.maps[0].name);
        expect(res.body.data.features[0].geometry.coordinates).to.have.length(4);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should return a filtered single map', function () {
    const p = chai.request(app)
      .get(`/api/maps/${mapIds[0]}`)
      .query({ filter: '{ "fields": {"name": true, "id": true} }' })
      .then((res) => {
        expect(res.body.name).to.equal(data.maps[0].name);
        expect(res.body).to.not.have.property(data);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should return an error when passed an invalid filter', function () {
    const p = chai.request(app)
      .get(`/api/maps/${mapIds[0]}`)
      .query({ filter: '{ fields: {"name": 1} }' })
      .catch((err) => {
        expect(err).to.have.status(400);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should update an existing map', function () {
    data.maps[1].name = 'Simple Map 2 Updated';

    const p = chai.request(app)
      .put(`/api/maps/${mapIds[1]}`)
      .send(data.maps[1])
      .then((res) => {
        expect(res.body.name).to.equal(data.maps[1].name);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should delete an existing map', function () {
    const p = chai.request(app)
      .delete(`/api/maps/${mapIds[0]}`)
      .then((res) => {
        expect(res.body.name).to.equal(data.maps[0].name);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should return an error when attemtping to delete a non-existant map', function () {
    const p = chai.request(app)
      .delete('/api/maps/INVALIDIDENTIFIER')
      .catch((err) => {
        expect(err).to.have.status(500);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should create a new map', function () {
    const p = chai.request(app)
      .post('/api/maps')
      .send(data.maps[0])
      .then((res) => {
        expect(res.body.name).to.equal(data.maps[0].name);
      });

    return expect(p).to.be.fulfilled;
  });
});


