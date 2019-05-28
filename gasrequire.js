'use strict';

var debug = require('util').debuglog('gas-local:require');
var fs = require('fs');
var path = require('path');
var vm = require('vm');

/**
 * Loads all js files from folder as single module
 *
 * @param {string} folderPath path to folder with downloaded app scripts
 * @param {object} [globalObject] global context to pass to module; `globalMock` will be used if not specified
 * @param {object} [options] options to control execution behaviour
 * @param {function} [options.filter] custom file filter for controlling which files get loaded inside execution context
 * @returns {import('vm').Context} script execution context;
 */
function gasrequire(folderPath, globalObject, options) {
  options = typeof options === 'object' ? options : {};
  options.filter = options.filter || defaultFileFilter;

  if (!globalObject) {
    debug('no `globalObject` passed. use default mock');
    globalObject = require('./globalmock-default');
  }

  var ctx = vm.createContext(globalObject);

  debug('loading from folder: %s...', folderPath);
  var scripts = walk(folderPath, options.filter);
  scripts.forEach(function (scriptPath) {
    debug('loading file: %s...', scriptPath);
    var code = fs.readFileSync(scriptPath, 'utf-8');

    try {
      // NOTE: Without try/catch envelope node runtime hangs on any error
      //       inside loaded script (e.g. syntax or ReferenceError)
      vm.runInContext(code, ctx, scriptPath);
    } catch (error) {
      // Rethrow the error and stop loading other files.
      throw error;
    }
  });

  return ctx;
}

function walk(dir, filter) {
  var results = [];
  fs.readdirSync(dir).forEach(function (file) {
    var filepath = path.join(dir, file);
    var stat = fs.statSync(filepath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filepath, filter));
      return;
    }
    if (filter(filepath)) results.push(filepath);
  });
  return results;
}

module.exports = gasrequire;

function defaultFileFilter(filepath) {
  var name = path.basename(filepath);
  var ext = path.extname(filepath);
  return ext === '.js' && name[0] !== '.';
}
