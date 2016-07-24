/**
 * Logs active user (email)
 * NOTE: When first use then authorization window will appear
 */
function LogActiveUser() {
  var email = Session.getActiveUser().getEmail();
  Logger.log("email:%s", email);
}
