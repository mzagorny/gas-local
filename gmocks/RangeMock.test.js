"use strict";

var assert = require('assert');
var gm = require('./index.js');


function objectsToMatrix(objs) {
  var mx = [];

  for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var row = [];

    for (var propName in obj) {
      if (obj.hasOwnProperty(propName)) {
        var val = obj[propName];
        row.push(val);
      }
    }

    mx.push(row);
  }

  return mx;
}

var data = [
  ["Id", "Name", "LastName", "Mail", "Phone", "Birthday", "Salary"]
  , [1, "Sybill", "Vance", "dignissim.pharetra.Nam@ligulaeuenim.co.uk", "(667) 945-9630", "1980-03-21T21:00:00.000Z", "$7,908"]
  , [2, "Laurel", "Griffith", "purus@veliteget.com", "(361) 919-1306", "1980-07-24T21:00:00.000Z", "$3,627"]
  , [3, "Piper", "Rasmussen", "ornare.tortor@etultricesposuere.com", "(337) 433-9497", "1981-02-06T21:00:00.000Z", "$4,918"]
  , [4, "Shannon", "Santana", "mattis@Duis.com", "(792) 470-8774", "1983-05-04T20:00:00.000Z", "$0,584"]
  , [5, "Blythe", "Rogers", "Donec@et.co.uk", "(707) 602-5120", "1982-09-21T20:00:00.000Z", "$8,709"]
  , [6, "Delilah", "Barron", "vel.quam@malesuadafames.com", "(137) 450-1935", "1983-12-14T21:00:00.000Z", "$8,090"]
  , [7, "Sade", "Macdonald", "In@tinciduntneque.com", "(931) 477-8740", "1980-01-05T21:00:00.000Z", "$4,717"]
  , [8, "Veda", "Stevenson", "Proin.vel@lectusconvallis.com", "(755) 374-8936", "1980-06-10T21:00:00.000Z", "$5,256"]
  , [9, "Aubrey", "Salinas", "nec.urna@feugiat.org", "(807) 785-5503", "1984-09-02T20:00:00.000Z", "$2,432"]
  , [10, "Iona", "Leach", "erat@risusMorbi.net", "(868) 800-8073", "1983-02-20T21:00:00.000Z", "$0,197"]
  , [11, "Odette", "Boyer", "Nulla.tincidunt.neque@IntegerurnaVivamus.edu", "(526) 298-4638", "1979-12-24T21:00:00.000Z", "$2,936"]
];

var RangeMock = gm.RangeMock;



describe('RangeMock', function() {
  /*
  TODO move to SheetTests 
  describe('#getLastColumn', function() {
    it('should return max column', function() {
      var data=[[1,2,3],[1,2,3,4,5],[1]];
      var r=new RangeMock
    })
  });
*/

  describe('#getValues', function() {
    it('works', function() {
//      throw new Error('Not implemented');
    })
  });
});


