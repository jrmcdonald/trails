/* eslint-disable func-names, prefer-arrow-callback */
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiPromised = require('chai-as-promised');
const expect = require('chai').expect;

const app = require('../../app');

chai.use(chaiHttp);
chai.use(chaiPromised);

describe('Elevations API Tests', function () {
  it('should return status 400 error with no "points" parameter', function () {
    const p = chai.request(app)
      .get('/elevations/list')
      .catch((err) => {
        expect(err).to.have.status(400);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should return status 400 error with empty "points" parameter', function () {
    const p = chai.request(app)
      .get('/elevations/list')
      .query({ points: '' })
      .catch((err) => {
        expect(err).to.have.status(400);
      });

    return expect(p).to.be.fulfilled;
  });

  it('should return elevation data', function () {
    const p = chai.request(app)
      .get('/elevations/list')
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


