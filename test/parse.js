var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;
var parse = require('../index.js').parse;

describe('parse:', function () {

  describe('url starting w/ protocol:', function () {

    it('should parse a url w/ all parts', function (done) {
      console.log(parse('http://google.com:80/path/hello'));
      expect(
        parse('http://google.com:80/path/hello')
      ).to.deep.equal({
        protocol: 'http:',
        slashes: true,
        auth: null,
        host: 'google.com:80',
        port: '80',
        hostname: 'google.com',
        hash: null,
        search: null,
        query: null,
        pathname: '/path/hello',
        path: '/path/hello',
        href: 'http://google.com:80/path/hello'
      });
      done();
    });

    it('should parse a url w/ port', function (done) {
      expect(
        parse('http://google.com:80')
      ).to.deep.equal({
        protocol: 'http:',
        slashes: true,
        auth: null,
        host: 'google.com:80',
        port: '80',
        hostname: 'google.com',
        hash: null,
        search: null,
        query: null,
        pathname: '/',
        path: '/',
        href: 'http://google.com:80/'
      });
      done();
    });

    it('should parse a url w/out port', function (done) {
      expect(
        parse('http://google.com')
      ).to.deep.equal({
        protocol: 'http:',
        slashes: true,
        host: 'google.com',
        hostname: 'google.com'
      });
      done();
    });

    it('should parse a url w/ slashes as protocol', function (done) {
      expect(
        parse('//google.com')
      ).to.deep.equal({
        protocol: 'http:',
        slashes: true,
        host: 'google.com',
        hostname: 'google.com'
      });
      done();
    });
  });

  // describe('host', function () {

  // });

  // describe('url starting w/ hostname:', function () {

  //   it('should parse a hostname alone', function (done) {
  //     expect(
  //       parse('google.com')
  //     ).to.deep.equal({
  //       protocol: 'http:',
  //       slashes: true,
  //       host: 'google.com',
  //       hostname: 'google.com'
  //     });
  //   });
  // });

  // describe('path', function () {

  // });
});