var Utils = {
  /**
   * Get the active user (email)
   * NOTE: When first use then authorization window will appear
   * @returns {String} email
   */
  GetActiveUser: function () {
    var email = Session.getActiveUser().getEmail();
    return email;
  }
}

/**
 * to run in cloud
 */
function _run_GetActiveUser() {
  Logger.log(Utils.GetActiveUser());
}