/**
Utils to run google services
and to mock them to run locally 
*/
var Utils = {
  /**
   * Get the active user (email)
   * NOTE: When first use then authorization window will appear
   * @returns {String} email
   */
  getActiveUser: function () {
    var email = Session.getActiveUser().getEmail();
    return email;
  },
  getRemainingEmailQuota: function () {
    return MailApp.getRemainingDailyQuota();
  }
}

/**
 * to run in cloud
 */
function _run_getActiveUser() {
  Logger.log("current user:%s", Utils.getActiveUser());
}

/**
 * to run in cloud
 */
function _run_getRemainingEmailQuota() {
  Logger.log("remaining email quota:%s", Utils.getRemainingEmailQuota());
}