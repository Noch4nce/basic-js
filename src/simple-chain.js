const CustomError = require("../extensions/custom-error");

const chainMaker = {
    arr: [],

    getLength() {
        let arr = [];
        return arr.length;
    },
    addLink(value) {
        this.arr.push(value);
        return this;
    },
    removeLink(position) {
      if (typeof(position) != 'number' ||  position <= 0 || position >= this.arr.length) {
          this.arr = [];
          throw Error();
      } else {
          this.arr.splice(position - 1, 1);
          return this;
      }
    },
    reverseChain() {
        this.arr.reverse();
        return this;
    },
    finishChain() {
        const res = this.arr;
        this.arr = [];

        return res.map (el => {
            return `( ${el} )`;
        }).join('~~');
    }
};

module.exports = chainMaker;
