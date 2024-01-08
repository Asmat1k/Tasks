const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let copy = arr.slice();
  let res = [];
  let num = -1;
  arr.sort((a,b) => a-b);
  arr = arr.slice(arr.lastIndexOf(num)+1,arr.length);
  let j =0;
  for(let i=0; i<copy.length; i++) {
    if(copy[i]==num) {
      res.push(copy[i]);
    }
    else {
      res.push(arr[j]);
      j++;
    }
  }
  return res;
}

module.exports = {
  sortByHeight
};
