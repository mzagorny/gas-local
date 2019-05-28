'use strict';

/* eslint-env mocha */

var assert = require('assert');
var gas = require('..');
var path = require('path');

var scriptsDir = path.join(__dirname, './src');

// disable log to console for clean test output
gas.globalMockDefault.Logger.enabled = false;

describe('Library loading', function () {
  var m = gas.require(scriptsDir);

  it('content is not loaded to global', function () {
    assert(typeof x === 'undefined');
    assert(typeof setX === 'undefined');
  });

  it('content from all files is accessible', function () {
    assert(m.hasOwnProperty('x'));
    assert(m.hasOwnProperty('setX'));
    assert(m.hasOwnProperty('Utils'));
  });

  it('variable initialize correct', function () {
    assert(m.x === 5);
  });

  it('variable in subfolder initialize correct', function () {
    assert(m.y === 5);
  });

  it('function updates variable from other file', function () {
    m.setX(7);
    assert(m.x === 7);
  });
});

describe('Default mock of services', function () {
  var m = gas.require(scriptsDir);
  it('logger is mocked', function () {
    // Contains call to Logger. if no exception then Logger is mocked as it should. test passes
    m.Utils.logCurrentDateTime();
  });
});

describe('Custom mock of services', function () {
  // default mock object
  var defMock = gas.globalMockDefault;
  // extend default mock object
  var customMock = { MailApp: { getRemainingDailyQuota: function () { return 50; } }, __proto__: defMock };
  // pass it to require
  var m = gas.require(scriptsDir, customMock);

  it('mock additional service - MailApp', function () {
    // Contains call to MailApp. if no exception then MailApp is mocked as it should.
    var q = m.Utils.getRemainingEmailQuota();
    // but assert returned value also for 100% sure :)
    assert(q === 50);
  });

  it('default Logger is mocked also', function () {
    // Contains call to Logger. if no exception then Logger is mocked as it should. test passes
    m.Utils.logCurrentDateTime();
  });
});
