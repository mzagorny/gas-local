"use strict";


var assert = require('assert');
var gas = require('.././index.js');

describe('library require', function () {
   var m = gas.require('./test/src');

   it('content is not loaded to global', function () {
      assert(typeof x==='undefined');
      assert(typeof setX==='undefined');
   })

   it('content from all files is accessible', function () {
      assert(m.hasOwnProperty('x'));
      assert(m.hasOwnProperty('setX'));
   })
   
   it('variable initialize correct', function () {
      assert(m.x == 5);
   })

   it('function updates variable from other file', function () {
      m.setX(7);
      assert(m.x == 7);
   })
});

describe('advanced mock of services', function () {
});