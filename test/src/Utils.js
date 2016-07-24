/**
 * Logs active user (email)
 * NOTE: When first use then authorization window will appear
 * @returns {String} email
 */
function GetActiveUser() {
  var email = Session.getActiveUser().getEmail();
  return email;
}