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

const userFile = join(__dirname, '../data/multiple-users.json');
const userData = JSON.parse(fs.readFileSync(userFile, 'utf8'));

const MMap = mongoose.model('Map');
const MUser = mongoose.model('User');

mongoose.Promise = global.Promise;

describe('Maps API Tests', function () {
  const mapIds = [];

  before(function () {
    const promises = [];
    const userIds = [];

    promises.push(MMap.remove({}));
    promises.push(MUser.remove({}));

    userData.users.forEach((user) => {
      const userModel = new MUser(user);

      userIds.push(userModel._id);
      promises.push(userModel.save());
    });

    mapData.maps.forEach((map) => {
      map.owner = userIds[0];

      const mapModel = new MMap(map);

      mapIds.push(mapModel._id);
      promises.push(mapModel.save());
    });

    return expect(Promise.all(promises)).to.be.fulfilled;
  });

  after(function () {
    const promises = [];

    promises.push(MMap.remove({}));
    promises.push(MUser.remove({}));

    return expect(Promise.all(promises)).to.be.fulfilled;
  });

  describe('Valid Owner Tests', function () {
    let token;

    before(function () {
      const auth = chai.request(app)
        .post('/api/auth')
        .send(userData.users[0])
        .then((res) => {
          token = res.body.data.token;
          Promise.resolve(true);
        });

      return expect(auth).to.be.fulfilled;
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

  describe('Invalid Owner Tests', function () {
    let token;

    before(function () {
      const auth = chai.request(app)
        .post('/api/auth')
        .send(userData.users[1])
        .then((res) => {
          token = res.body.data.token;
          Promise.resolve(true);
        });

      return expect(auth).to.be.fulfilled;
    });

    it('should return an empty collection of maps', function () {
      const p = chai.request(app)
        .get('/api/maps')
        .set('Authorization', `JWT ${token}`)
        .then((res) => {
          expect(res.body).to.have.length(0);
        });

      return expect(p).to.be.fulfilled;
    });

    it('should return an unfiltered single map', function () {
      const p = chai.request(app)
        .get(`/api/maps/${mapIds[0]}`)
        .set('Authorization', `JWT ${token}`)
        .catch((err) => {
          expect(err).to.have.status(403);
        });

      return expect(p).to.be.fulfilled;
    });

    it('should fail update an existing map that the user does not own', function () {
      mapData.maps[1].name = 'Simple Map 2 Updated';

      const p = chai.request(app)
        .put(`/api/maps/${mapIds[1]}`)
        .set('Authorization', `JWT ${token}`)
        .send(mapData.maps[1])
        .catch((err) => {
          expect(err).to.have.status(403);
        });

      return expect(p).to.be.fulfilled;
    });

    it('should fail to delete an existing map that the user does not own', function () {
      const p = chai.request(app)
        .delete(`/api/maps/${mapIds[0]}`)
        .set('Authorization', `JWT ${token}`)
        .catch((err) => {
          expect(err).to.have.status(403);
        });

      return expect(p).to.be.fulfilled;
    });
  });
});
