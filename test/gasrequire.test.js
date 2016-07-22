"use strict";


var assert = require('assert');
var gas = require('.././index.js');

describe('gasrequire', function () {
   var m = gas.require('./test/testmodule');

   it('module variables and function are not in global context ', function () {
      assert(typeof x==='undefined');
      assert(typeof setX==='undefined');
   })

   it('module variables and function are accessible', function () {
      assert(m.hasOwnProperty('x'));
      assert(m.hasOwnProperty('setX'));
   })
   
   it('module variable initialized correct', function () {
      assert(m.x == 5);
   })

   it('function updates variable', function () {
      m.setX(7);
      assert(m.x == 7);
   })

});