/* eslint-disable func-names, prefer-arrow-callback */
const bcrypt = require('bcryptjs');
const chai = require('chai');
const chaiPromised = require('chai-as-promised');
const expect = require('chai').expect;
const fs = require('fs');
const join = require('path').join;
const mongoose = require('mongoose');

require('../../../server/app');

chai.use(chaiPromised);

const file = join(__dirname, '../data/simple-user.json');
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const MUser = mongoose.model('User');

mongoose.Promise = global.Promise;

describe('User Model Tests', function () {
  describe('Validation Tests', function () {
    it('should allow valid data', function () {
      const map = new MUser(data);
      return expect(map.validate()).to.be.fulfilled;
    });

    it('should require user.email', function () {
      const copiedData = JSON.parse(JSON.stringify(data));
      delete copiedData.email;

      const map = new MUser(copiedData);
      return expect(map.validate()).to.be.rejected;
    });

    it('should require user.password', function () {
      const copiedData = JSON.parse(JSON.stringify(data));
      delete copiedData.password;

      const map = new MUser(copiedData);
      return expect(map.validate()).to.be.rejected;
    });
  });

  describe('Functions Tests', function () {
    const newUser = new MUser(data);

    before(function () {
      return expect(MUser.remove({})).to.be.fulfilled;
    });

    after(function () {
      return expect(MUser.remove({})).to.be.fulfilled;
    });

    it('should save users to the database', function () {
      return expect(newUser.save()).to.be.fullfilled;
    });

    it('should find users in the database', function () {
      return expect(MUser.findById(newUser.id).exec()).to.be.fulfilled;
    });

    it('should hash user\'s passwords when saving them to the dabatase', function () {
      const find = MUser.findById(newUser.id).exec();

      const comparison = find.then((user) => {
        bcrypt.compare(data.password, user.password);
      });

      return expect(comparison).to.be.fullfilled;
    });

    it('should find and update users in the database', function () {
      const find = MUser.findById(newUser.id).exec();

      const update = find.then((user) => {
        user.email = 'updated@example.org';
        return user.save();
      });

      return expect(update).to.be.fulfilled;
    });
  });
});
