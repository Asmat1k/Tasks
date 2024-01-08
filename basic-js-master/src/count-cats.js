const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let count = 0;
  let length = backyard.length;
  for(let i=0; i<length; i++) {
    let lengthSecond = backyard[i].length
    for(let j=0; j<lengthSecond; j++) {
      if(backyard[i][j]=='^^') {
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};
