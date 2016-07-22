var fs = require('fs');
var vm = require('vm');
var path = require('path');

var util = require('util');
var debug = util.debuglog('gas-local:require');

/**
 * 
 * 
 * @param {String} path to folder with downloaded app scripts
 * @param {Object} global to pass to module. globalMock will be passed if not specified
 * @returns module
 */
function gasrequire(folderPath, globalObject) {
  if (!globalObject){
    debug('no globalObject passed. use default mock');
    globalObject=require('./globalMock');    
  }
  
  debug('loading from folder: %s',folderPath)
  var files = fs.readdirSync(folderPath);
  var gsFiles = files.filter(function(f) {
    var ext = path.extname(f);
    return ext == '.js';
  });

  var ctx = vm.createContext(globalObject);
 
  for (var i = 0; i < gsFiles.length; i++) {
    var fname = gsFiles[i];
    var fpath = path.join(folderPath, fname);
    debug('loading file: %s...',fpath);

    var code = fs.readFileSync(fpath);
    vm.runInContext(code, ctx, fpath);
  }

  return ctx;
}

module.exports=gasrequire;