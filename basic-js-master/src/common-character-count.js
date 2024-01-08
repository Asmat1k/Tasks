const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 * 'bc', 'adcaa'
 */
function getCommonCharacterCount(s1, s2) {
  let max = Math.max(s1.length, s2.length);
  let count = 0;
    
  for(let i=0; i<max; i++) {
    if(s1.includes(s2[i]) && s1.length > 0) {
      count++;
      s1 = s1.replace(s2[i],'');
    }
    if(s1.length==0) return count;
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
