module.exports = {
  Logger: {
    log: function(obj) {
      console.log(obj);
				}
  },
  Utilities: {
    formatString: function(format, etc) {
      return util.format.apply(util, arguments);
				}
  }
};