/* eslint-disable func-names, prefer-arrow-callback */
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiPromised = require('chai-as-promised');
const expect = require('chai').expect;
const fs = require('fs');
const join = require('path').join;
const mongoose = require('mongoose');

const app = require('../../../server/app');

chai.use(chaiHttp);
chai.use(chaiPromised);

const userFile = join(__dirname, '../data/simple-user.json');
const userData = JSON.parse(fs.readFileSync(userFile, 'utf8'));

const MUser = mongoose.model('User');

mongoose.Promise = global.Promise;

describe('Elevations API Tests', function () {
  let token;

  before(function () {
    const promises = [];
    const user = new MUser(userData);

    promises.push(MUser.remove({}));
    promises.push(user.save());

    const preAuth = Promise.all(promises);

    const postAuth = preAuth.then(() =>
      chai.request(app)
        .post('/api/auth')
        .send(userData)
        .then((res) => {
          token = res.body.data.token;
          Promise.resolve(true);
        })
    );

    return expect(postAuth).to.be.fulfilled;
  });

  after(function () {
    return expect(MUser.remove({})).to.be.fulfilled;
  });

  it('should return status 400 error with no "points" parameter', function () {
    const p = chai.request(app)
      .get('/api/elevations/list')
      .set('Authorization', `JWT ${token}`)
      .catch((err) => {
        expect(err).to.have.status(400);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should return status 400 error with empty "points" parameter', function () {
    const p = chai.request(app)
      .get('/api/elevations/list')
      .set('Authorization', `JWT ${token}`)
      .query({ points: '' })
      .catch((err) => {
        expect(err).to.have.status(400);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should return elevation data', function () {
    const p = chai.request(app)
      .get('/api/elevations/list')
      .set('Authorization', `JWT ${token}`)
      .query({ points: '53.06863553236679,-4.078014492988587' })
      .then((res) => {
        expect(res.body.resourceSets).to.have.length(1);
        expect(res.body.resourceSets[0].resources).to.have.length(1);
        expect(res.body.resourceSets[0].resources[0].elevations).to.have.length(1);
        expect(res.body.resourceSets[0].resources[0].elevations[0]).to.equal(1023);
      });

    return expect(p).to.be.fulfilled;
  });
});
