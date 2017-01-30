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

describe('Auth API Tests', function () {
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

  it('should authenticate a valid user', function () {
    const p = chai.request(app)
      .post('/auth')
      .send(data)
      .then((res) => {
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.have.property('token');
        expect(res.body.data.token).to.not.be.empty;
      });

    return expect(p).to.be.fulfilled;
  });

  it('should not authenticate an invalid user', function () {
    const copiedData = JSON.parse(JSON.stringify(data));
    copiedData.email = 'invalid@example.org';

    const p = chai.request(app)
      .post('/auth')
      .send(copiedData)
      .catch((err) => {
        expect(err).to.have.status(403);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should not authenticate an invalid password', function () {
    const copiedData = JSON.parse(JSON.stringify(data));
    copiedData.password = 'badpassword';

    const p = chai.request(app)
      .post('/auth')
      .send(copiedData)
      .catch((err) => {
        expect(err).to.have.status(403);
      });

    return expect(p).to.be.fulfilled;
  });
});


