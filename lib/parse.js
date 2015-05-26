'use strict';

var url = require('url');
var exists = require('101/exists');

module.exports = parsePartialUrl;

var startsWithTwoSlashes =  /^\/\//;
var startsWithOneSlash = /^\/[^\/]/;
function parsePartialUrl (partialUrl) {
  var parsed = url.parse(partialUrl);
  if (parsed.protocol) {
    if (!parsed.slashes) {
      // host w/out protocol
      return parsed;
    }
    else {
      return parsed;
    }
  }
  else if (!exists(parsed.hostname)) {
    if (startsWithTwoSlashes) {
      parsed = url.parse(
        partialUrl.replace(startsWithTwoSlashes, 'http://')
      );
      delete parsed.protocol;
      return parsed;
    }
    else {
      return parsed;
    }
  }
  else {
    return parsed;
  }
}