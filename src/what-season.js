const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

    if (date === undefined) {
        return 'Unable to determine the time of year!';
    };

    if (Object.prototype.toString.call(date) !== '[object Date]') {
        throw new Error();
    }

    let n = date.getMonth();

    if ([11, 0, 1].includes(n)) {
        return 'winter';
    } else if ([2, 3, 4].includes(n)) {
        return 'spring';
    } else if ([5, 6, 7].includes(n)) {
        return 'summer';
    } else {
        return 'autumn';
    }
};
