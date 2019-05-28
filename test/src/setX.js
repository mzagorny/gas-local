/**
 * Set variable `x`
 * @param {any} val value to set
 */
function setX(val) {
  Logger.log('set x to %s from %s...', val, x);
  x = val;
  Logger.log('x = %s now', val);
}

/**
 * trigger to run in cloud
 */
function _run_setXto10() {
  setX(10);
}
