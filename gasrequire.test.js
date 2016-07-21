"use strict";


var assert = require('assert');
var gas = require('./index.js');

describe('gasrequire', function () {
   var m = gas.require('./testmodule');

   it('public variables and function is visible ', function () {
      assert(m.hasOwnProperty('x'));
      assert(m.hasOwnProperty('setX'));
   })
   
   it('variable initialized correct', function () {
      assert(m.x == 5);
   })

   it('function updates variable', function () {
      m.setX(7);
      assert(m.x == 7);
   })

});