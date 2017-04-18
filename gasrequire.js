var fs = require('fs');
var vm = require('vm');
var path = require('path');

var util = require('util');
var debug = util.debuglog('gas-local:require');

/**
 * Loads all js files from folder as single module  
 * 
 * @param {string} folderPath to folder with downloaded app scripts
 * @param {object} globalObject to pass to module. globalMock will be passed if not specified
 * @param {object} options that give more control over behavour. options.filter can be to determine which files are loaded into the context
 * @returns module
 */
function gasrequire(folderPath, globalObject, options) {
  if (!globalObject) {
    debug('no globalObject passed. use default mock');
    globalObject = require('./globalmock-default');
  }

  options = typeof options === 'object' ? options : {};
  var filterFunc  = options.filter ? options.filter : function(f) {
    var ext = path.extname(f);
    return ext == '.js';
  };

  debug('loading from folder: %s...', folderPath)
  var files = walk(folderPath);
  var gsFiles = files.filter(filterFunc);

  var ctx = vm.createContext(globalObject);

  for (var i = 0; i < gsFiles.length; i++) {
    var fpath = gsFiles[i];
    debug('loading file: %s...', fpath);

    var code = fs.readFileSync(fpath);

    try {
      //without try/catch envelop node runtime hangs if any error in loaded script (e.g. syntax or RefeenceError)      
        vm.runInContext(code, ctx, fpath);
    }
    catch (error) {
      //rethrow the error and stop loading other files.
      throw error;
    }
  }

  return ctx;
}

function walk(dir) {
    var results = []
    var list = fs.readdirSync(dir)
    list.forEach(function(file) {
        file = dir + '/' + file
        var stat = fs.statSync(file)
        if (stat && stat.isDirectory()) results = results.concat(walk(file))
        else results.push(file)
    })
    return results
}

module.exports = gasrequire;
