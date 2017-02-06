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

const MUser = mongoose.model('User');

mongoose.Promise = global.Promise;

describe('Users API Tests', function () {
  before(function () {
    return expect(MUser.remove({})).to.be.fulfilled;
  });

  after(function () {
    return expect(MUser.remove({})).to.be.fulfilled;
  });

  it('should require an email', function () {
    const copiedData = JSON.parse(JSON.stringify(data));
    delete copiedData.email;

    const p = chai.request(app)
      .post('/api/users')
      .send(copiedData)
      .catch((err) => {
        expect(err).to.have.status(400);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should require a password', function () {
    const copiedData = JSON.parse(JSON.stringify(data));
    delete copiedData.password;

    const p = chai.request(app)
      .post('/api/users')
      .send(copiedData)
      .catch((err) => {
        expect(err).to.have.status(400);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should create a new user', function () {
    const p = chai.request(app)
      .post('/api/users')
      .send(data)
      .then((res) => {
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.have.property('message');
        expect(res.body.data.message).to.equal('User created successfully.');
      });

    return expect(p).to.be.fulfilled;
  });

  it('should fail to create a duplicate user', function () {
    const p = chai.request(app)
      .post('/api/users')
      .send(data)
      .catch((err) => {
        expect(err).to.have.status(409);
      });

    return expect(p).to.be.fulfilled;
  });
});


