/* eslint-disable func-names, prefer-arrow-callback */
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
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

const mapFile = join(__dirname, '../data/multiple-maps.json');
const mapData = JSON.parse(fs.readFileSync(mapFile, 'utf8'));

const userFile = join(__dirname, '../data/simple-user.json');
const userData = JSON.parse(fs.readFileSync(userFile, 'utf8'));

const Map = mongoose.model('Map');
const User = mongoose.model('User');

mongoose.Promise = global.Promise;

describe('Maps API Tests', function () {
  let token;
  const mapIds = [];

  before(function () {
    const promises = [];
    const user = new User(userData);

    promises.push(Map.remove({}));
    promises.push(User.remove({}));
    promises.push(user.save());

    mapData.maps.forEach((map) => {
      const model = new Map(map);
      mapIds.push(model._id);
      promises.push(model.save());
    });

    const preAuth = Promise.all(promises);

    const postAuth = preAuth.then(() =>
      chai.request(app)
        .post('/auth')
        .send(userData)
        .then((res) => {
          token = res.body.data.token;
          Promise.resolve(true);
        })
    );

    return expect(postAuth).to.be.fulfilled;
  });

  after(function () {
    const promises = [];

    promises.push(Map.remove({}));
    promises.push(User.remove({}));

    return expect(Promise.all(promises)).to.be.fulfilled;
  });

  it('should return an unfiltered collection of maps', function () {
    const p = chai.request(app)
      .get('/api/maps')
      .set('Authorization', `JWT ${token}`)
      .then((res) => {
        expect(res.body).to.have.length(2);
        expect(res.body[0]).to.have.property('data');
      });

    return expect(p).to.be.fulfilled;
  });

  it('should return a filtered collection of maps', function () {
    const p = chai.request(app)
      .get('/api/maps')
      .set('Authorization', `JWT ${token}`)
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
      .set('Authorization', `JWT ${token}`)
      .query({ filter: '{ fields: {"name": 1} }' })
      .catch((err) => {
        expect(err).to.have.status(400);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should return an unfiltered single map', function () {
    const p = chai.request(app)
      .get(`/api/maps/${mapIds[0]}`)
      .set('Authorization', `JWT ${token}`)
      .then((res) => {
        expect(res.body.name).to.equal(mapData.maps[0].name);
        expect(res.body.data.features[0].geometry.coordinates).to.have.length(4);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should return a filtered single map', function () {
    const p = chai.request(app)
      .get(`/api/maps/${mapIds[0]}`)
      .set('Authorization', `JWT ${token}`)
      .query({ filter: '{ "fields": {"name": true, "id": true} }' })
      .then((res) => {
        expect(res.body.name).to.equal(mapData.maps[0].name);
        expect(res.body).to.not.have.property(mapData);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should return an error when passed an invalid filter', function () {
    const p = chai.request(app)
      .get(`/api/maps/${mapIds[0]}`)
      .set('Authorization', `JWT ${token}`)
      .query({ filter: '{ fields: {"name": 1} }' })
      .catch((err) => {
        expect(err).to.have.status(400);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should update an existing map', function () {
    mapData.maps[1].name = 'Simple Map 2 Updated';

    const p = chai.request(app)
      .put(`/api/maps/${mapIds[1]}`)
      .set('Authorization', `JWT ${token}`)
      .send(mapData.maps[1])
      .then((res) => {
        expect(res.body.name).to.equal(mapData.maps[1].name);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should delete an existing map', function () {
    const p = chai.request(app)
      .delete(`/api/maps/${mapIds[0]}`)
      .set('Authorization', `JWT ${token}`)
      .then((res) => {
        expect(res.body.name).to.equal(mapData.maps[0].name);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should return an error when attemtping to delete a non-existant map', function () {
    const p = chai.request(app)
      .delete('/api/maps/INVALIDIDENTIFIER')
      .set('Authorization', `JWT ${token}`)
      .catch((err) => {
        expect(err).to.have.status(500);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should create a new map', function () {
    const p = chai.request(app)
      .post('/api/maps')
      .set('Authorization', `JWT ${token}`)
      .send(mapData.maps[0])
      .then((res) => {
        expect(res.body.name).to.equal(mapData.maps[0].name);
      });

    return expect(p).to.be.fulfilled;
  });
});
