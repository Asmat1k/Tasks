const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    const length = arr.length;
    let count = 0;
    if(length == 0) return count + 1;
    for(let i=0; i<length; i++) {
      if(Array.isArray(arr[i])) {
        count = Math.max(this.calculateDepth(arr[i]), count);
      }
    }
    return count + 1;
  }
}

module.exports = {
  DepthCalculator
};
