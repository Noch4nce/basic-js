const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (Object.prototype.toString.call(members) !== '[object Array]') {
        return false;
    }

    let res = members.map( el => {
        if (typeof el === 'string') {
          return el.trim()[0].toUpperCase();
        }
    })

    return res.sort().join('');
};
