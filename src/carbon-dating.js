const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    const number = parseFloat(sampleActivity, 10);

    if (sampleActivity !== sampleActivity) {
        return false;
    }

    if (number !== isFinite(number)) {
        return false;
    }

    if (typeof sampleActivity !== 'string') {
        return false;
    }

    if ((number >= MODERN_ACTIVITY) || (number <= 0)) {
        return false;
    }

    const f = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(MODERN_ACTIVITY / number) / f);
};
