"use strict";


var assert = require('assert');
var gas = require('.././index.js');

describe('Library loading', function () {
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

describe('Default mock of services', function () {
  var m = gas.require('./test/src');
  it('Logger is mocked', function () {
    //Contains call to Logger. if no exception then Logger is mocked as it should. test passes 
    m.Utils.logCurrentDateTime();
  })
});

describe('Custom mock of services', function () {
  //default mock object
  var defMock = gas.globalMockDefault;
  //extend default mock object
  var customMock = { MailApp: { getRemainingDailyQuota: function () { return 50; } }, __proto__: defMock };
  //pass it to require
  var m = gas.require('./test/src', customMock);

  it('MailApp is mocked', function () {
    //Contains call to MailApp. if no exception then MailApp is mocked as it should. 
    var q = m.Utils.getRemainingEmailQuota();
    //but assert returned value also for 100% sure :)
    assert(q == 50);
  })

  it('Default Logger is mocked also', function () {
    //Contains call to Logger. if no exception then Logger is mocked as it should. test passes 
    m.Utils.logCurrentDateTime();
  })
});