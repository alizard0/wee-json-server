const assert = require('assert')
const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const server = require('../server')
const should = chai.should()
const expect = chai.expect

describe('server.js API tests', () => {
	it('should return pong', done => {
		chai
			.request(server)
			.get("/ping")
			.end((err, res) => {
				res.should.have.status(200);
				expect(res.body).to.deep.equal("pong");
				done()
			});
	})
})