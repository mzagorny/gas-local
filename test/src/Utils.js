/**
 * Utils to play with Google Services
 */
var Utils = {  
  getActiveUser: function () {
    var email = Session.getActiveUser().getEmail();
    return email;
  },
  getRemainingEmailQuota: function () {
    return MailApp.getRemainingDailyQuota();
  },
  logCurrentDateTime: function () {
    Logger.log("Current datetime: %s", new Date());
  }
}

/**
 * triggers to run in cloud
 */

function _run_logCurrentDateTime() {
  Utils.logCurrentDateTime();
}

function _run_getActiveUser() {
  Logger.log("current user:%s", Utils.getActiveUser());
}

function _run_getRemainingEmailQuota() {
  Logger.log("remaining email quota:%s", Utils.getRemainingEmailQuota());
}