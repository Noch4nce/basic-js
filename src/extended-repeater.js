const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
    separator = separator || '+';
    additionSeparator = additionSeparator || '|';
    addition = (addition === null) ? 'null' : addition;

    const newStr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
    return new Array(repeatTimes).fill(str + newStr).join(separator);
};
