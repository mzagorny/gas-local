'use strict';

var util = require('util');
var formatDate = require('date-format');

/**
 * Default mock object for google services
 */
exports.Logger = {
  enabled: true,
  log: function (obj) {
    if (this.enabled) {
      console.log.apply(console, arguments);
    }
  }
};

exports.Utilities = {
  formatString: function (format, etc) {
    return util.format.apply(util, arguments);
  },
  formatDate: function (date, tz, format) {
    return formatDate(format, date);
  }
};
