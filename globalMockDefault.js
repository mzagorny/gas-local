var util = require('util');
var formatDate = require('date-format');

/**
 * Default mock object for google services
 */
module.exports = {
  Logger: {
    log: function(obj) {
      console.log.apply(console, arguments);
				}
  },
  Utilities: {
    formatString: function(format, etc) {
      return util.format.apply(util, arguments);
				},
    formatDate: function(date, tz, format) {
      return formatDate(format, date);
				}
  }
};