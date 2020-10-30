const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let countArr = 0;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        countArr = Math.max(this.calculateDepth(arr[i]), countArr);
      } else {
        countArr = countArr;
      }
    }

    return ++countArr;
  }
};