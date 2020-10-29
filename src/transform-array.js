const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

    if (!Array.isArray(arr)) {
      throw new Error();
    }

    let res = [];

    arr.map((el, i, arr) => {
      if (el !== '--discard-prev' && el !== '--discard-next'  && el !== '--double-prev' &&  el !== '--double-next' ) {

        res.push(el);

        if (arr[i - 1] === '--discard-next') {
          res.pop();
        } else if (arr[i - 1] === '--double-next') {
          res.push(el);
        }

        if ((arr[i + 1] === '--discard-prev') && (arr[i - 1] !== '--discard-next')) {
          res.pop();
        } else if ((arr[i + 1] === '--double-prev') && (arr[i - 1] !== '--discard-next')) {
          res.push(el);
        }
      }
    });

  return res;

};
