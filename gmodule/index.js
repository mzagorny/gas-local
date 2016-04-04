var fs = require('fs');
var vm = require('vm');
var path = require('path');

var util = require('util');
//gas_module instead of gas-module, because in latter case debug also shows log from node's core module
var debug = util.debuglog('gas_module');

function gasrequire(libPath, globalObject) {
  debug('loading from folder: %s',libPath)
  var files = fs.readdirSync(libPath);
  var gsFiles = files.filter(function(f) {
    var ext = path.extname(f);
    return ext == '.js';
  });

  var ctx = vm.createContext(globalObject);
 
  for (var i = 0; i < gsFiles.length; i++) {
    var fname = gsFiles[i];
    var fpath = path.join(libPath, fname);
    debug('loading file: %s...',fpath);

    var code = fs.readFileSync(fpath);
    vm.runInContext(code, ctx, fpath);
  }

  return ctx;
}


module.exports = {
  require:gasrequire
};




