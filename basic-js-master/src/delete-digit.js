const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const length = n.toString().length;
  let max = n.toString()[0];
  let tryNum = -1;
  for(let i=0; i<length; i++) {
    tryNum = n.toString().slice(0,i) + n.toString().slice(i+1);
    if(tryNum >= max) {
      max = +tryNum;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
