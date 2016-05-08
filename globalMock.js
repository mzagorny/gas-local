var util = require('util');
var formatDate = require('date-format');

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