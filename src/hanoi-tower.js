const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

    // let stack = [];
    // let count = 0;

    // let newS = [];

    // for (let i = disksNumber; i > 0; i--) {
    //     stack.push(i);
    // }

    // for (let j = 0; j < stack.length; j++) {
    //     let max = 1;
    //     for (let k = 0; k < stack[j]; k++) {
    //         if (stack[j] === max) {
    //           newS.push(stack[j]);
    //           max++;
    //         }
    //         count++;
    //     }
    // }

    const turns = disksNumber * 6 + 1;
    const seconds = turns / (turnsSpeed / (60 * 60));
    return { turns, seconds }
};
