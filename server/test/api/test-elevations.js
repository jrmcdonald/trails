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

const file = join(__dirname, '../data/simple-user.json');
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const User = mongoose.model('User');

mongoose.Promise = global.Promise;

describe('Elevations API Tests', function () {
  const auth = chai.request(app).post('/auth').send(data);

  before(function () {
    const promises = [];
    const user = new User(data);

    promises.push(User.remove({}));
    promises.push(user.save());

    return expect(Promise.all(promises)).to.be.fulfilled;
  });

  after(function () {
    return expect(User.remove({})).to.be.fulfilled;
  });

  it('should return status 400 error with no "points" parameter', function () {
    const p = auth.then((resAuth) => {
      chai.request(app)
        .get('/api/elevations/list')
        .set('Authorization', `JWT ${resAuth.body.data.token}`)
        .catch((err) => {
          expect(err).to.have.status(400);
        });
    });

    return expect(p).to.be.fulfilled;
  });

  it('should return status 400 error with empty "points" parameter', function () {
    const p = auth.then((resAuth) => {
      chai.request(app)
        .get('/api/elevations/list')
        .set('Authorization', `JWT ${resAuth.body.data.token}`)
        .query({ points: '' })
        .catch((err) => {
          expect(err).to.have.status(400);
        });
    });

    return expect(p).to.be.fulfilled;
  });

  it('should return elevation data', function () {
    const p = auth.then((resAuth) => {
      chai.request(app)
        .get('/api/elevations/list')
        .set('Authorization', `JWT ${resAuth.body.data.token}`)
        .query({ points: '53.06863553236679,-4.078014492988587' })
        .then((res) => {
          expect(res.body.resourceSets).to.have.length(1);
          expect(res.body.resourceSets[0].resources).to.have.length(1);
          expect(res.body.resourceSets[0].resources[0].elevations).to.have.length(1);
          expect(res.body.resourceSets[0].resources[0].elevations[0]).to.equal(1023);
        });
    });

    return expect(p).to.be.fulfilled;
  });
});


