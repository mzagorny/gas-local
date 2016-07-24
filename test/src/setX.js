/**
 * Set variable x 
 * @param {any} v value to set
 */
function setX(v) {
  Logger.log('set x to %s from %s...', v, x);
  x = v;
  Logger.log('x = %s now', v);
}