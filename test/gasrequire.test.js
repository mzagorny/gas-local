"use strict";


var assert = require('assert');
var gas = require('.././index.js');

describe('library loading', function () {
  var m = gas.require('./test/src');

  it('content is not loaded to global', function () {
    assert(typeof x === 'undefined');
    assert(typeof setX === 'undefined');
  })

  it('content from all files is accessible', function () {
    assert(m.hasOwnProperty('x'));
    assert(m.hasOwnProperty('setX'));
    assert(m.hasOwnProperty('Utils'));
  })

  it('variable initialize correct', function () {
    assert(m.x == 5);
  })

  it('function updates variable from other file', function () {
    m.setX(7);
    assert(m.x == 7);
  })
});

describe('default mock of services', function () {
  var m = gas.require('./test/src');
  it('Logger is mocked', function () {
    m.Utils.logCurrentDateTime();
  })
});

describe('custom mock of services', function () {
});